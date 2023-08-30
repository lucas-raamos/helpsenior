import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Company from './components/pages/Company';
import NewPerfil from './components/pages/NewPerfil';
import Perfis from './components/pages/Perfis';
import MainLayout from './components/layout/MainLayout';


function App() {
  return (
    <Router>
      <Routes>
        
        {/* Renderizar as páginas dentro do MainLayout */}
        <Route element={<MainLayout><Home /></MainLayout>} path="/home" />
        <Route element={<MainLayout><Perfis /></MainLayout>} path="/perfis" />
        <Route element={<MainLayout><Company /></MainLayout>} path="/company" />
        <Route element={<MainLayout><Contact /></MainLayout>} path="/contact" />
        <Route element={<MainLayout><NewPerfil /></MainLayout>} path="/newperfil" />
       
      </Routes>
    </Router>
  );
}


export default App;
