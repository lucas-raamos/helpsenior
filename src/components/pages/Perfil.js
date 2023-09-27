import styles from './Perfil.module.css'

import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Loading from '../layout/Loading'
import Message from '../layout/Message'
import Container from '../layout/Container'
import PerfilForm from '../Perfil/PerfilForm'

function Perfil() {
    const { id } = useParams()

    const [perfil, setPerfil] = useState([])
    const [showPerfilForm, setShowPerfilForm] = useState(false)
    const [message, setMessage] = useState()
    const [type, setType] = useState()

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/perfis/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((resp) => resp.json())
                .then((data) => {
                    setPerfil(data)
                })
                .catch(err => console.log)
        }, 300)
    }, [id])

    function editPost(perfil) {
        fetch(`http://localhost:5000/perfis/${perfil.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(perfil),
        })
            .then((resp) => resp.json())
            .then((data) => {
                setPerfil(data)
                setShowPerfilForm(false)
                setMessage('Perfil atualizado! ')
                setType('success')

            })
            .catch((err) => console.log(err))
    }

    function togglePerfilForm() {
        setShowPerfilForm(!showPerfilForm)

    }

    return (
        <>
            {perfil.name ? (
                <div className={styles.perfil_details}>
                    <Container customClass="column">
                        {message && <Message type={type} msg={message} />}
                        <div className={styles.details_container}>
                            <h1>Perfil: {perfil.name}</h1>
                            <button className={styles.btn} onClick={togglePerfilForm}>
                                {!showPerfilForm ? 'Editar perfil' : 'Fechar'}
                            </button>
                            {!showPerfilForm ? (
                                <div className={styles.perfil_info}>
                                    <p>
                                        <span>Data de nascimento:</span> {perfil.date}
                                    </p>
                                    <p>
                                        <span>Peso:</span> {perfil.peso}
                                    </p>
                                    <p>
                                        <span>Gênero:</span> {perfil.genero.name}
                                    </p>
                                </div>
                            ) : (
                                <div className={styles.perfil_info}>
                                    <PerfilForm
                                        handleSubmit={editPost}
                                        btnText="Concluir edição"
                                        perfilData={perfil}
                                    />

                                </div>
                            )}
                        </div>

                    </Container>
                </div>
            ) : (
                <Loading />
            )}
        </>
    )
}

export default Perfil