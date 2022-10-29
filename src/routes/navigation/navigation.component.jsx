import { Fragment, useState } from 'react';
import { Outlet } from 'react-router-dom';
import {
  NavigationContainer,
  NavLinks,
  LogoContainer,
  NameContainer,
} from './navigation.styles';
import styles from './navigation.module.css'
import SiteLogo from '../../assets/SCBEAUTYLOGO.png';
import EditorialModal from '../../components/nav-modals/editorial-modal.component';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Fragment>
      <NavigationContainer>
        <NameContainer>SC BEAUTY</NameContainer>
        <LogoContainer>
          <img src={SiteLogo} className="logo" alt="logo" />
        </LogoContainer>
        <NavLinks>
          <main>
            <button
              className={styles.primaryBtn}
              onClick={() => setIsOpen(true)}
            >
              Editorial
            </button>
            {isOpen && <EditorialModal setIsOpen={setIsOpen} />}
          </main>
          <main>
            <button
              className={styles.primaryBtn}
              onClick={() => setIsOpen(true)}
            >
              Work
            </button>
            {isOpen && <EditorialModal setIsOpen={setIsOpen} />}
          </main>
          <main>
            <button
              className={styles.primaryBtn}
              onClick={() => setIsOpen(true)}
            >
              Bridal
            </button>
            {isOpen && <EditorialModal setIsOpen={setIsOpen} />}
          </main>
          <main>
            <button
              className={styles.primaryBtn}
              onClick={() => setIsOpen(true)}
            >
              Boudoir
            </button>
            {isOpen && <EditorialModal setIsOpen={setIsOpen} />}
          </main>
          <main>
            <button
              className={styles.primaryBtn}
              onClick={() => setIsOpen(true)}
            >
              Pricing
            </button>
            {isOpen && <EditorialModal setIsOpen={setIsOpen} />}
          </main>
          <main>
            <button
              className={styles.primaryBtn}
              onClick={() => setIsOpen(true)}
            >
              About
            </button>
            {isOpen && <EditorialModal setIsOpen={setIsOpen} />}
          </main>
          <main>
            <button
              className={styles.primaryBtn}
              onClick={() => setIsOpen(true)}
            >
              Contact
            </button>
            {isOpen && <EditorialModal setIsOpen={setIsOpen} />}
          </main>
          <main>
            <button
              className={styles.primaryBtn}
              onClick={() => setIsOpen(true)}
            >
              Our Work
            </button>
            {isOpen && <EditorialModal setIsOpen={setIsOpen} />}
          </main>
          <main>
            <button
              className={styles.primaryBtn}
              onClick={() => setIsOpen(true)}
            >
              Looks
            </button>
            {isOpen && <EditorialModal setIsOpen={setIsOpen} />}
          </main>
          <main>
            <button
              className={styles.primaryBtn}
              onClick={() => setIsOpen(true)}
            >
              Blog
            </button>
            {isOpen && <EditorialModal setIsOpen={setIsOpen} />}
          </main>
          <main>
            <button
              className={styles.primaryBtn}
              onClick={() => setIsOpen(true)}
            >
              Wedding Contact
            </button>
            {isOpen && <EditorialModal setIsOpen={setIsOpen} />}
          </main>
        </NavLinks>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
