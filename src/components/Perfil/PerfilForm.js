import { useState, useEffect } from 'react'
import styles from './PerfilForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

function PerfilForm({ handleSubmit, btnText, perfilData}) {
    const [generos, setGeneros] = useState([])
    const [perfil, setPerfil] = useState(perfilData || {})

    useEffect(() => {
      fetch('http://localhost:5000/generos', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setGeneros(data)
        })
    }, [])

    const submit = (e) => {
      e.preventDefault()
      handleSubmit(perfil)
    }

    function handleChange(e) {
      setPerfil({ ...perfil, [e.target.name]: e.target.value })
    }
  
    function handleGenero(e) {
      setPerfil({
        ...perfil,
        genero: {
          id: e.target.value,
          name: e.target.options[e.target.selectedIndex].text,
        },
      })
    }
  

    return (
        <form onSubmit={submit} className={styles.form}>
          <Input 
            type='text' 
            text='Nome'
            name='name'
            placeholder='Insira o nome completo'
            handleOnchange={handleChange}
            value={perfil.name ? perfil.name : ''}
            />
            <Input 
            type='text' 
            text='Data de nascimento'
            name='date'
            placeholder='Insira a data de nascimento'
            handleOnchange={handleChange}
            value={perfil.date ? perfil.date : ''}
            />
            <Input 
            type='text' 
            text='Peso'
            name='peso'
            placeholder='Insira o peso'
            handleOnchange={handleChange}
            value={perfil.peso ? perfil.peso : ''}
            />
            <Select 
            name='genero_id' 
            text='Selecione um gênero'
            options={generos}
            handleOnChange={handleGenero}
            value={perfil.genero ? perfil.genero.id : ''}
            />

            <SubmitButton text={btnText}/>

        </form>
    )

}

export default PerfilForm