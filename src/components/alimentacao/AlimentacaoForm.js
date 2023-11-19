import { useState } from 'react';
import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';
import styles from '../Perfil/PerfilForm.module.css'

function AlimentacaoForm( {handleSubmit, btnText, perfilData }) {

    const [alimento, setAlimento] = useState({})

   
    function submit(e) {
        e.preventDefault()
        perfilData.alimentos.push(alimento)
        handleSubmit(perfilData)

    }
    function handleChange(e){
        setAlimento({ ...alimento, [e.target.name]: e.target.value})


    }

    return(
        <form onSubmit={submit} className={styles.form}>
            <Input
                type='text'
                text='Refeição '
                name='tipo'
                placeholder='Café da manhã, almoço, jantar'
                handleOnchange={handleChange}
            />
            <Input
                type='text'
                text='Alimentos consumidos'
                name='consumidos'
                placeholder='Insira os alimentos consumidos'
                handleOnchange={handleChange}
            />
            <Input
                type='text'
                text='Restrições alimentares'
                name='restricoes'
                placeholder='Insira as restrições'
                handleOnchange={handleChange}
            />
            <Input
                type='text'
                text='Quantidade consumida'
                name='qtd'
                placeholder='qtdConsumida'
                handleOnchange={handleChange}
            />
            <SubmitButton text={btnText} />
        </form>
    )


}

export default AlimentacaoForm;