import React, { useState } from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  background: white;
  padding: 1rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  position: relative;
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  color: #2563eb;
  text-decoration: none;
`;

const MenuItems = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
    position: fixed;
    top: 70px; /* Height of navbar */
    left: 0;
    right: 0;
    bottom: 0;
    background: white;
    padding: 2rem;
    flex-direction: column;
    gap: 2rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
    overflow-y: auto;
    z-index: 999;
  }
`;

const NavLink = styled.a`
  color: #4b5563;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  padding: 0.75rem;
  font-size: 1.1rem;

  &:hover {
    color: #2563eb;
  }

  @media (max-width: 768px) {
    text-align: center;
    padding: 1rem;
    border-radius: 8px;
    
    &:hover {
      background-color: #f3f4f6;
    }
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1000;

  @media (max-width: 768px) {
    display: block;
  }
`;

const HamburgerIcon = styled.div`
  width: 24px;
  height: 2px;
  background: ${({ $isOpen }) => ($isOpen ? 'transparent' : '#4b5563')};
  position: relative;
  transition: all 0.3s ease;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 24px;
    height: 2px;
    background: #4b5563;
    transition: all 0.3s ease;
  }

  &::before {
    transform: ${({ $isOpen }) => $isOpen ? 'rotate(45deg)' : 'translateY(-8px)'};
  }

  &::after {
    transform: ${({ $isOpen }) => $isOpen ? 'rotate(-45deg)' : 'translateY(8px)'};
  }
`;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <Nav>
      <Container>
        <Logo href="/">Velox</Logo>
        
        <MenuItems>
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#products">Products</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </MenuItems>

        <HamburgerButton onClick={toggleMenu} aria-label="Toggle menu">
          <HamburgerIcon $isOpen={isOpen} />
        </HamburgerButton>

        <MobileMenu $isOpen={isOpen}>
          <NavLink href="#home" onClick={closeMenu}>Home</NavLink>
          <NavLink href="#products" onClick={closeMenu}>Products</NavLink>
          <NavLink href="#about" onClick={closeMenu}>About</NavLink>
          <NavLink href="#contact" onClick={closeMenu}>Contact</NavLink>
        </MobileMenu>
      </Container>
    </Nav>
  );
}

export default Navbar; 