import React from 'react';
import { useNavigate } from 'react-router-dom';
import PerfilForm from '../Perfil/PerfilForm';
import styles from './NewPerfil.module.css';

function NewPerfil() {
  const navigate = useNavigate();

  function createPost(perfil) {
    // initialize cost and services
    perfil.helpsenior = 0;
    perfil.services = [];

    fetch('http://localhost:5000/perfis', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(perfil),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        //redirect
        navigate('/perfis',  { state: { message: 'Perfil criado com sucesso!' }} );
      })
      .catch((err) => console.log(err));
  }


  return (
      <div className={styles.newperfil_container}>
        <h1>Criar Perfil</h1>
        <p>Crie um perfil para depois adicionar um medicamento</p>
        <PerfilForm handleSubmit={createPost} btnText='Criar Perfil' />
      </div>
  );
}
export default NewPerfil;
