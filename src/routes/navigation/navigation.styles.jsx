import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  z-index: 999;
  position: sticky;
  top: 0;
  background-color: #232323;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  display: flex;
  margin-left: 5%;
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
