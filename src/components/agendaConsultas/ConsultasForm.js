import { useState } from 'react';
import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';
import styles from '../Perfil/PerfilForm.module.css'

function ConsultasForm( {handleSubmit, btnText, perfilData }) {

    const [consulta, setConsulta] = useState({})

   
    function submit(e) {
        e.preventDefault()
        perfilData.consultas.push(consulta)
        handleSubmit(perfilData)

    }
    function handleChange(e){
        setConsulta({ ...consulta, [e.target.name]: e.target.value})


    }

    return(
        <form onSubmit={submit} className={styles.form}>
            <Input
                type='text'
                text='Data'
                name='date'
                placeholder='Insira a data da consulta'
                handleOnchange={handleChange}
            />
            <Input
                type='text'
                text='Hora'
                name='hora'
                placeholder='Insira o horário'
                handleOnchange={handleChange}
            />
            <Input
                type='text'
                text='Medico/Profissional'
                name='profissional'
                placeholder='Nome do médico/Profissional'
                handleOnchange={handleChange}
            />
            <Input
                type='text'
                text='Local'
                name='local'
                placeholder='Local da consulta'
                handleOnchange={handleChange}
            />
            <Input
                type='text'
                text='Observações'
                name='observacoes'
                placeholder='Observações'
                handleOnchange={handleChange}
            />
            <SubmitButton text={btnText} />
        </form>
    )


}

export default ConsultasForm;