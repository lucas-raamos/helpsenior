import React from 'react';
import styles from './Login.module.css';

const Login = () => {
  return (
    <div className={styles['login-container']}>
      <div className={styles['login-image']}>
        {/* Aqui ficará a imagem */}
      </div>
      <div className={styles['login-right']}>
        <div className={styles['login-form']}>
          <h2>Login</h2>
          <form>
            <div>
              <label>Username:</label>
              <input type="text" placeholder="Digite seu nome de usuário" />
            </div>
            <div>
              <label>Password:</label>
              <input type="password" placeholder="Digite sua senha" />
            </div>
            <button type="submit">Entrar</button>
          </form>
          <p>
            Não tem uma conta? <a href="/cadastro">Cadastre-se</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
