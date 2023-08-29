import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import styles from './Footer.module.css';
import footer from '../../img/footer.png';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.columns_container}>
        <img src={footer} alt='HelpSenior' />

        <div className={styles.column}>
          <h3>Início</h3>
          <ul>
            <li>Home</li>
            <li>Cursos</li>
            <li>Downloads</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Sobre nós</h3>
          <ul>
            <li>Informações da empresa</li>
            <li>Contato</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Suporte</h3>
          <ul>
            <li>FAQ</li>
            <li>Telefone</li>
            <li>Chat</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Redes Sociais</h3>
          <ul className={styles.social_list}>
            <li className={`${styles.social_icon}`}>
              <FaFacebook />
            </li>
            <li className={`${styles.social_icon}`}>
              <FaInstagram />
            </li>
            <li className={`${styles.social_icon}`}>
              <FaLinkedin />
            </li>
          </ul>
        </div>
      </div>
      <p className={styles.copy_right}>
        <span>HelpSenior</span> &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
}

export default Footer;
