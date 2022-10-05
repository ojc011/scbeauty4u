import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  background: #222;
  float: left;
  display: block;
  padding-top: 20px;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 10%;
  overflow-x: hidden !important;
  overflow-y: hidden !important;
`;

export const LogoContainer = styled(Link)`
  height: auto;
  width: auto;
  padding: 25px;
  display: flex;
  justify-content: center;
`;

export const NavLinks = styled.div`
  height: 100%;
  display: block;
  align-items: center;
  justify-content: space-between;
`;

export const NavLink = styled.p`
  padding: 10px 15px;
  cursor: pointer;
  color: #ffff;
  display: flex;
  justify-content: center;
`;
