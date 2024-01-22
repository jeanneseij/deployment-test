import styled from 'styled-components';
import { Navbar, Nav } from 'react-bootstrap';

export const StyledNavbar = styled(Navbar)`
  background-color: #f3dace;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 4px 2px -2px gray;
`;


export const NavbarBrandContainer = styled.div`
  display: flex;
  align-items: center;
  transition: transform 0.3s;

  .navbar-brand {
    display: flex;
    align-items: center;
    font-size: 1.3em;
    font-weight: 600;
    color: #5a3825;

    img {
      height: 50px;
      margin-right: 0px;
    }
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.1, 1.1);
  }
`;

export const StyledNav = styled(Nav)`
  display: flex;
  margin-right: 70px;
  justify-content: center;
  flex-grow: 1;
  padding-left: 0;
  padding-right: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledNavLink = styled(Nav.Link)`
  color: #5a3825;
  margin: 0 100px;
  text-decoration: none;
  transition: transform 0.3s;

  &:hover {
    color: #7c5948;
    font-weight: 700;
    transform: scale(1.3, 1.3);
  }
`;
