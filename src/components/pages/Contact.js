import React, { useState } from 'react';
import styles from './Contact.module.css'; // Importe o módulo de estilos

function Contact() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    datanascimento: '',
    estadocivil: '',
    sexo: '',
    aprender: [],
    mensagem: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      const updatedAprender = formData.aprender.includes(value)
        ? formData.aprender.filter(item => item !== value)
        : [...formData.aprender, value];

      setFormData({
        ...formData,
        aprender: updatedAprender
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados, por exemplo, para um servidor ou executar outras ações com os dados do formulário
    console.log(formData);
  };

  return (
    
    <div className={styles.container_form}>
      <h1>Cuidador em busca de emprego?</h1>
      <h1>Anuncie seu serviço conosco</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.form_grupo}>
          <label htmlFor="nome" className={styles.form_label}>
            Nome Completo
          </label>
          <input
            type="text"
            name="nome"
            className={styles.form_input}
            id="nome"
            placeholder="Nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.form_grupo}>
          <label htmlFor="email" className={styles.form_label}>
            Email
          </label>
          <input
            type="email"
            name="email"
            className={styles.form_input}
            id="email"
            placeholder="seuemail@email.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.form_grupo}>
          <label htmlFor="datanascimento" className={styles.form_label}>
            Data de Nascimento
          </label>
          <input
            type="date"
            name="datanascimento"
            className={styles.form_input}
            id="datanascimento"
            placeholder="Data de Nascimento"
            value={formData.datanascimento}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.form_grupo}>
          <label htmlFor="estadocivil" className={styles.text}>
            Estado civil
          </label>
          <select
            name="estadocivil"
            className={styles.dropdown}
            value={formData.estadocivil}
            onChange={handleChange}
            required
          >
            <option selected disabled className={styles.form_select_option} value="">
              Selecione
            </option>
            <option value="Solteiro" className={styles.form_select_option}>Solteiro(a)</option>
            <option value="Casado" className={styles.form_select_option}>Casado(a)</option>
            <option value="Divorciado" className={styles.form_select_option}>Divorciado(a)</option>
            <option value="Viúvo" className={styles.form_select_option}>Viúvo(a)</option>
          </select>
        </div>
        
        <div className={styles.form_grupo}>
          <span className={styles.legenda}>Sexo:</span>
          <div className={styles['radio-btn']}>
            <input
              type="radio"
              className={styles.form_new_input}
              id="masculino"
              name="sexo"
              value="Masculino"
              required="required"
              onChange={handleChange}
            />
            <label htmlFor="masculino" className={`${styles.radio_label} ${styles.form_label}`}>
              <span className={styles.radio_new_btn}></span> Masculino
            </label>
          </div>
          <div className={styles['radio-btn']}>
            <input
              type="radio"
              className={styles.form_new_input}
              id="feminino"
              name="sexo"
              value="Feminino"
              required="required"
              onChange={handleChange}
            />
            <label htmlFor="feminino" className={`${styles.radio_label} ${styles.form_label}`}>
              <span className={styles.radio_new_btn}></span> Feminino
              <br /> <br />
            </label>
          
          </div>
        </div>          
        <div className={styles.form_grupo}>
          <label htmlFor="arquivo" className={styles.form_label}>
            Anexe seu arquivo
          </label>
          <input
            type="file"
            name="arquivo"
            className={styles.form_input}
            id="arquivo"
            onChange={handleChange}
          />
        </div>
        <div className={styles.form_grupo}>
          <label htmlFor="message" className={styles.form_message_label}>
            Digite aqui sua sua mensagem:
          </label>
          <textarea
            name="mensagem"
            id="message"
            cols="30"
            rows="3"
            className={`${styles.form_input} ${styles.message_input}`}
            value={formData.mensagem}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className={styles.submit}>
          <input type="hidden" name="acao" value="enviar" />
          <button type="submit" name="Submit" className={styles.submit_btn}>
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
