import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import SiteLogo from '../../assets/SCBEAUTYLOGO.png';
import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from './navigation.styles';

const Navigation = () => {
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <img src={SiteLogo} className="logo" alt="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/">WORK</NavLink>
          <NavLink to="/">BRIDAL</NavLink>
          <NavLink to="/">BOUDOIR</NavLink>
          <NavLink to="/">PRICING</NavLink>
          <NavLink to="/">ABOUT</NavLink>
          <NavLink to="/">CONTACT</NavLink>
        </NavLinks>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
