import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import Message from "../layout/Message"
import Container from '../layout/Container'
import Loading from "../layout/Loading"
import LinkButton from '../layout/LinkButton'
import PerfilCard from "../Perfil/PerfilCard"
import styles from './Perfis.module.css'

function Perfis() {
    const [perfis, setPerfis] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)
    const [perfilMessage, setPerfilMessage] = useState('')

    const navigate = useNavigate()
    let message = ''
    if (navigate.state) {
        message = navigate.state.message
    }

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:5000/perfis', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                setPerfis(data)
                setRemoveLoading(true)
            })
            .catch((err) => console.error(err))
        }, 300)
    }, [])

    function removePerfil(id) {
        fetch(`http://localhost:5000/perfis/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then(() => {
            setPerfis(perfis.filter((perfil) => perfil.id !== id))
            setPerfilMessage('Paciente removido com sucesso!')
        })
        .catch((err) => console.log(err))
    }
        
    return (
        <div className={styles.perfil_container}>
            <div className={styles.title_container}>
                <h1>Meus Pacientes</h1>
                <LinkButton to='/newperfil' text='Criar Perfil' />
            </div>
            {message && <Message type="success" msg={message} />}
            {perfilMessage && <Message type="success" msg={perfilMessage} />}
            <Container customClass='start'>
                {perfis.length > 0 ?
                    perfis.map((perfil) => (
                        <PerfilCard 
                            id={perfil.id} 
                            name={perfil.name} 
                            date={perfil.date} 
                            peso={perfil.peso} 
                            genero={perfil.genero ? perfil.genero.name : 'Gênero Desconhecido'}
                            key={perfil.id}
                            handleRemove={removePerfil}  
                        />
                    )) :
                    (removeLoading ? <p>Não há pacientes cadastrados</p> : <Loading />)
                }
            </Container>
        </div>
    )
}

export default Perfis;
