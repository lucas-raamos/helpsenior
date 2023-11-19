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
    const [errors, setErrors] = useState({});
    const [valid, setValid] = useState(true);
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        let isvalid = true;
        let validationErrors = {};

        if (formData.fname === "" || formData.fname === null) {
            isvalid = false;
            validationErrors.fname = "Nome obrigatório";
        }
        if (formData.lname === "" || formData.lname === null) {
            isvalid = false;
            validationErrors.lname = "Sobrenome obrigatório";
        }
        if (formData.email === "" || formData.email === null) {
            isvalid = false;
            validationErrors.email = "Email obrigatório";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            isvalid = false;
            validationErrors.email = "Email não é válido";
        }

        if (formData.password === "" || formData.password === null) {
            isvalid = false;
            validationErrors.password = "Senha obrigatória";
        } else if (formData.password.length < 6) {
            isvalid = false;
            validationErrors.password = "A senha deve ter pelo menos 6 caracteres";
        }

        if (formData.cpassword !== formData.password) {
            isvalid = false;
            validationErrors.cpassword = "As senhas não coincidem";
        }

        setErrors(validationErrors);
        setValid(isvalid);

        if (Object.keys(validationErrors).length === 0) {
            axios.post('http://localhost:5000/users', formData)
            .then(result => {
                alert('Registrado com sucesso')
                navigate('/login')
            })
            .catch(err => console.log(err))
           
        }
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
                 {errors.fname && <p className={styles['registration-error']}>{errors.fname}</p>}
                 {errors.lname && <p className={styles['registration-error']}>{errors.lname}</p>}
                 {errors.email && <p className={styles['registration-error']}>{errors.email}</p>}
                 {errors.password && <p className={styles['registration-error']}>{errors.password}</p>}
                 {errors.cpassword && <p className={styles['registration-error']}>{errors.cpassword}</p>}
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
                        <Link to='/login'> Se já tem uma conta? Faça login </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Registration;
