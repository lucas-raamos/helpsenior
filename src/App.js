import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Company from './components/pages/Company';
import Cuidadores from './components/pages/Cuidadores'
import NewPerfil from './components/pages/NewPerfil';
import Perfis from './components/pages/Perfis';
import MainLayout from './components/layout/MainLayout';
import LandingPage from './components/pages/LandingPage';
import Perfil from './components/pages/Perfil';
import Login from './components/pages/Login';
import Registration from './components/pages/Registration';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<MainLayout><Home /></MainLayout>} path="/home" />
        <Route path="/login" element={<Login />}  />
        <Route path="/registration" element={<Registration />}  />
        <Route element={<MainLayout><Perfis /></MainLayout>} path="/perfis" />
        <Route element={<MainLayout><Company /></MainLayout>} path="/company" />
        <Route element={<MainLayout><Contact /></MainLayout>} path="/contact" />
        <Route element={<MainLayout><Cuidadores /></MainLayout>} path="/cuidadores" />
        <Route element={<MainLayout><NewPerfil /></MainLayout>} path="/newperfil" />
        <Route element={<MainLayout><Perfil /></MainLayout>} path="/perfil/:id" />
        {/*<Route element={<RelatorioPerfilCard />} path="/perfil/:id/card" */}
      </Routes>
    </Router>
  );
}

export default App;
