import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavigationContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  position: sticky;
  top: 0;
  background-color: #232323;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled.p`
  padding: 10px 15px;
  cursor: pointer;
  color: #ffff;
`;

export const LogoContainer = styled(Link)`
  height: auto;
  width: 25%;
  margin-left: 5%;
  float: left;
`;

export const NameContainer = styled.div`
  color: #fff;
  font: inherit;
  font-family: Montserrat, sans-serif;
  font-size: 39px;
  letter-spacing: 5px;
  text-align: center;
  font-weight: bold;
  margin-left: 5%;
`;
