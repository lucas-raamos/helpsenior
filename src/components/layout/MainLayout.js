// components/layout/MainLayout.js
import React from 'react';
import Container from './Container'; // Importe o componente Container
import NavBar from './NavBar';
import Footer from './Footer';

function MainLayout({ children }) {
  return (
    <>
      <NavBar />
      <Container customClass="min-height">
        {children}
      </Container>
      <Footer />
    </>
  );
}

export default MainLayout;
