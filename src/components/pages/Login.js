import React, { useState } from 'react';
import styles from './Login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let isvalid = true;
    let validationErrors = {};

    if (!formData.email) {
      isvalid = false;
      validationErrors.email = "Email obrigatório";
    }

    if (!formData.password) {
      isvalid = false;
      validationErrors.password = "Senha obrigatória";
    } else if (formData.password.length < 6) {
      isvalid = false;
      validationErrors.password = "A senha deve ter pelo menos 6 caracteres";
    }

    if (isvalid) {
      axios.get('http://localhost:5000/users', formData)
        .then(result => {
          const userExists = result.data.some(user => user.email === formData.email);

          if (!userExists) {
            isvalid = false;
            validationErrors.email = "Usuário não encontrado";
          } else {
            // Verifica a senha para o usuário existente
            const user = result.data.find(user => user.email === formData.email);
            if (user.password !== formData.password) {
              isvalid = false;
              validationErrors.email = "Usuário não encontrado";
            }
          }

          setErrors(validationErrors);
          setValid(isvalid);

          if (isvalid) {
            alert('Login concluído');
            navigate('/home');
          }
        })
        .catch(err => console.log(err));
    } else {
      setErrors(validationErrors);
      setValid(isvalid);
    }
  };

  return (
    <div className={styles['login-container']}>
      <div className={styles['login-image']}>
        {/* Aqui ficará a imagem */}
      </div>
      <div className={styles['login-right']}>
        <div className={styles['login-form']}>
          <h2>Login</h2>
          {!valid && (
            <span className={styles['text-danger']}>
              {errors.email && <p>{errors.email}</p>}
              {errors.password && <p>{errors.password}</p>}
            </span>
          )}
          <form onSubmit={handleSubmit}>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name='email'
                placeholder="Digite seu email"
                onChange={(event) => setFormData({ ...formData, email: event.target.value })}
              />
            </div>
            <div>
              <label>Senha:</label>
              <input
                type="password"
                name='password'
                placeholder="Digite sua senha"
                onChange={(event) => setFormData({ ...formData, password: event.target.value })}
              />
            </div>
            <button type="submit">Login</button>
          </form>
          <p>
            <Link to='/registration'>Não tem conta? Registre-se</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
