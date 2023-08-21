import styles from './PerfilForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

function PerfilForm({ btnText}) {
    return (
        <form className={styles.form}>
          <Input 
            type='text' 
            text='Nome'
            name='name'
            placeholder='Insira o nome completo'
            />
            <Input 
            type='text' 
            text='Data de nascimento'
            name='data'
            placeholder='Insira a data de nascimento'
            />
            <Input 
            type='text' 
            text='Peso'
            name='peso'
            placeholder='Insira o peso'
            />
            <Select name='genero_id' text='Selecione um gênero'/>

            <SubmitButton text={btnText}/>

        </form>
    )

}

export default PerfilForm