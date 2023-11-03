import { useState } from 'react';
import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';
import styles from '../Perfil/PerfilForm.module.css'

function MedicamentoForm( {handleSubmit, btnText, perfilData }) {

    const [medicamento, setMedicamento] = useState({})

   
    function submit(e) {
        e.preventDefault()
        perfilData.medicamentos.push(medicamento)
        handleSubmit(perfilData)

    }
    function handleChange(e){
        setMedicamento({ ...medicamento, [e.target.name]: e.target.value})


    }

    return(
        <form onSubmit={submit} className={styles.form}>
            <Input
                type='text'
                text='Nome do medicamento'
                name='name'
                placeholder='Insira o nome do medicamento'
                handleOnchange={handleChange}
            />
            <Input
                type='text'
                text='Dosagem'
                name='dosagem'
                placeholder='Insira a dosagem'
                handleOnchange={handleChange}
            />
            <Input
                type='text'
                text='Horario'
                name='horario'
                placeholder='Insira o horário'
                handleOnchange={handleChange}
            />
            <Input
                type='text'
                text='Observações'
                name='observacao'
                placeholder='Observações'
                handleOnchange={handleChange}
            />
            <SubmitButton text={btnText} />
        </form>
    )


}

export default MedicamentoForm;