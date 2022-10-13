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
          <NavLink to="/">Editorial</NavLink>
          <NavLink to="/">Work</NavLink>
          <NavLink to="/">Bridal</NavLink>
          <NavLink to="/">Boudoir</NavLink>
          <NavLink to="/">Pricing</NavLink>
          <NavLink to="/">About</NavLink>
          <NavLink to="/">Contact</NavLink>
          <NavLink to="/">Our Work</NavLink>
          <NavLink to="/">Looks</NavLink>
          <NavLink to="/">Blog</NavLink>
          <NavLink to="/">Wedding Contact</NavLink>
        </NavLinks>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
