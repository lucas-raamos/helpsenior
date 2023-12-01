import React, { useState } from 'react';
import styles from './Registration.module.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Registration = () => {
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        password: '',
        cpassword: ''
    });
    const [valid, setValid] = useState(true);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const isFormValid = validateForm();
        setValid(isFormValid);

        if (isFormValid) {
            axios.post('http://localhost:5000/users', formData)
                .then(result => {
                    alert('Registrado com sucesso');
                    navigate('/login');
                })
                .catch(err => console.log(err));
        }
    };

    const validateForm = () => {
        const { fname, lname, email, password, cpassword } = formData;
        if (!fname || !lname || !email || !password || !cpassword) {
            return false; // Retorna falso se algum campo estiver vazio
        }
        return true;
    };

    return (
        <div className={styles['login-container']}>
            <div className={styles['login-image']}>
                {/* Aqui ficará a imagem */}
            </div>
            <div className={styles['login-right']}>
                <div className={styles['login-form']}>
                    <h2>Cadastre-se</h2>
                    {!valid && (
                        <span className={styles['text-danger']}>
                            <p className={styles['registration-error']}>Preencha todos os campos</p>
                        </span>
                    )}
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Nome:</label>
                            <input
                                type="text"
                                name='fname'
                                placeholder="Digite seu nome"
                                onChange={(event) => setFormData({ ...formData, fname: event.target.value })}
                            />
                        </div>
                        <div>
                            <label>Sobrenome:</label>
                            <input
                                type="text"
                                name='lname'
                                placeholder="Digite seu sobrenome"
                                onChange={(event) => setFormData({ ...formData, lname: event.target.value })}
                            />
                        </div>
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
                        <div>
                            <label>Confirme sua senha:</label>
                            <input
                                type="password"
                                name='cpassword'
                                placeholder="Confirme sua senha"
                                onChange={(event) => setFormData({ ...formData, cpassword: event.target.value })}
                            />
                        </div>
                        <button type="submit">Cadastrar agora</button>
                    </form>
                    <p>
                        <Link to='/login'>Se já tem uma conta? Faça login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Registration;
