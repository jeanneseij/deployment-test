import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { StyledNavbar, StyledNav, StyledNavLink, NavbarBrandContainer } from './NavbarStyles';
import { CAT_LOGO_URL } from '../constants/urls'; 

const NavbarComponent = () => {
  return (
    <StyledNavbar expand="lg">
      <NavbarBrandContainer>
        <LinkContainer to="/">
          <StyledNavbar.Brand as="span">
            <img src={CAT_LOGO_URL} alt="Cat Ears Logo" />
            App
          </StyledNavbar.Brand>
        </LinkContainer>
      </NavbarBrandContainer>
      <StyledNav>
        <LinkContainer to="/home">
          <StyledNavLink>Cats</StyledNavLink>
        </LinkContainer>
        <LinkContainer to="/votes">
          <StyledNavLink>Votes</StyledNavLink>
        </LinkContainer>
        <LinkContainer to="/favorites">
          <StyledNavLink>Favorites</StyledNavLink>
        </LinkContainer>
      </StyledNav>
    </StyledNavbar>
  );
};

export default NavbarComponent;
