// components/layout/MainLayout.js
import React from 'react';
import Container from './Container'; // Importe o componente Container
import NavBar from './NavBar';


function MainLayout({ children }) {
  return (
    <>
      <NavBar />
      <Container customClass="min-height">
        {children}
      </Container>
      
    </>
  );
}

export default MainLayout;
