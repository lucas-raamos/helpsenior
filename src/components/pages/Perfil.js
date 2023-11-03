import styles from './Perfil.module.css'

import { parse, v4 as uuidv4 } from 'uuid';
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Loading from '../layout/Loading'
import Message from '../layout/Message'
import Container from '../layout/Container'
import PerfilForm from '../Perfil/PerfilForm'
import MedicamentoForm from '../medicamentos/MedicamentoForm'
import MedicamentoCard from '../medicamentos/MedicamentoCard'
import { GiMedicines } from 'react-icons/gi';
import ConsultasForm from '../agendaConsultas/ConsultasForm'
import ConsultasCard from '../agendaConsultas/ConsultasCard'
import { BsJournalCheck } from 'react-icons/bs'

function Perfil() {
    const { id } = useParams()

    const [perfil, setPerfil] = useState([])
    const [medicamentos, setMedicamentos] = useState([])
    const [showPerfilForm, setShowPerfilForm] = useState(false)
    const [showMedicamentoForm, setShowMedicamentoForm] = useState(false)
    const [showConsultasForm, setShowConsultasForm] = useState(false)
    const [consultas, setConsultas] = useState([])
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
                    setMedicamentos(data.medicamentos)
                    setConsultas(data.consultas)
                })
                .catch(err => console.log)
        }, 300)
    }, [id])

    function editPost(perfil) {
        setMessage('')

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

    function createMedicamento(perfil) {
        setMessage('')
        const lastMedicamento = perfil.medicamentos[perfil.medicamentos.length - 1]
        lastMedicamento.id = uuidv4()
        const lastMedicamentoHelpSenior = lastMedicamento.helpsenior
        const newHelpSenior = parseFloat(perfil.helpsenior) + parseFloat(lastMedicamentoHelpSenior)
        // maximum value validation
        // add service cost to project cost total
        perfil.helpsenior = newHelpSenior
        fetch(`http://localhost:5000/perfis/${perfil.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(perfil),
        })
            .then((resp) => resp.json())
            .then((data) => {
                setShowMedicamentoForm(false)
            })
            .catch((err) => console.log(err))

    }
    function createConsulta(perfil) {
        setMessage('')
        const lastConsulta = perfil.consultas[perfil.consultas.length - 1]
        lastConsulta.id = uuidv4()
        const lastConsultaHelpSenior = lastConsulta.helpsenior
        const newHelpSenior = parseFloat(perfil.helpsenior) + parseFloat(lastConsultaHelpSenior)
        // maximum value validation
        // add service cost to project cost total
        perfil.helpsenior = newHelpSenior
        fetch(`http://localhost:5000/perfis/${perfil.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(perfil),
        })
            .then((resp) => resp.json())
            .then((data) => {
                setShowConsultasForm(false)
            })
            .catch((err) => console.log(err))

    }
    function removeMedicamento(id, helpsenior) {
        const medicamentosUpdated = perfil.medicamentos.filter(
            (medicamento) => medicamento.id !== id
        )

        const perfilUpdated = perfil
        perfilUpdated.medicamentos = medicamentosUpdated
        perfilUpdated.helpsenior = parseFloat(perfilUpdated.helpsenior) - parseFloat(helpsenior)

        fetch(`http://localhost:5000/perfis/${perfilUpdated.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(perfilUpdated),
        })
            .then((resp) => resp.json())
            .then((data) => {
                setPerfil(perfilUpdated)
                setMedicamentos(medicamentosUpdated)
                setMessage('Medicamento removido com sucesso!')
                window.scrollTo({ top: 0, behavior: 'smooth' });
            })
            .catch((err) => console.log(err))

    }
    function removeConsulta(id, helpsenior) {
        const consultasUpdated = perfil.consultas.filter(
            (consulta) => consulta.id !== id
        )

        const perfilUpdated = perfil
        perfilUpdated.consultas = consultasUpdated
        perfilUpdated.helpsenior = parseFloat(perfilUpdated.helpsenior) - parseFloat(helpsenior)

        fetch(`http://localhost:5000/perfis/${perfilUpdated.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(perfilUpdated),
        })
            .then((resp) => resp.json())
            .then((data) => {
                setPerfil(perfilUpdated)
                setConsultas(consultasUpdated)
                setMessage('Consulta removida com sucesso!')
                window.scrollTo({ top: 0, behavior: 'smooth' });
            })
            .catch((err) => console.log(err))

    }
    function togglePerfilForm() {
        setShowPerfilForm(!showPerfilForm)

    }
    function toggleMedicamentoForm() {
        setShowMedicamentoForm(!showMedicamentoForm)

    }
    function toggleConsultasForm() {
        setShowConsultasForm(!showConsultasForm)

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
                        <div className={styles.medicamentos_form_container}>
                            <h2>Adicione um medicamento:</h2>
                            <button className={styles.btn} onClick={toggleMedicamentoForm}>
                                {!showMedicamentoForm ? 'Adicionar medicação' : 'Fechar'}
                            </button>
                            <div className={styles.perfil_info}>
                                {showMedicamentoForm && <MedicamentoForm
                                    handleSubmit={createMedicamento}
                                    btnText='Adicionar medicamento'
                                    perfilData={perfil}

                                />}
                            </div>
                        </div>
                        <div className={styles.medicamentos_form_container}>
                            <h2>Adicione uma consulta:</h2>
                            <button className={styles.btn} onClick={toggleConsultasForm}>
                                {!showConsultasForm ? 'Adicionar uma consulta' : 'Fechar'}
                            </button>
                            <div className={styles.perfil_info}>
                                {showConsultasForm && <ConsultasForm
                                    handleSubmit={createConsulta}
                                    btnText='Adicionar consulta'
                                    perfilData={perfil}

                                />}
                            </div>
                        </div>
                        <h2 className={styles.title}>
                            <span className={styles.icon}>
                                <GiMedicines size="1.3em" />
                            </span>
                            Medicamentos
                        </h2>

                        <Container customClass='start'>
                            {medicamentos.length > 0 &&
                                medicamentos.map((medicamentos) => (
                                    <MedicamentoCard
                                        id={medicamentos.id}
                                        name={medicamentos.name}
                                        helpsenior={medicamentos.helpsenior}
                                        dosagem={medicamentos.dosagem}
                                        horario={medicamentos.horario}
                                        observacao={medicamentos.observacao}
                                        key={medicamentos.id}
                                        handleRemove={removeMedicamento}
                                    />

                                ))
                            }
                            {medicamentos.length === 0 && <p>Não há medicamentos cadastrados</p>}
                        </Container>
                        <br />
                        <h2 className={styles.title}>
                            <span className={styles.icon}>
                                <BsJournalCheck size="1.3em" />
                            </span>
                            Consultas
                        </h2>
                        <Container customClass='start'>
                            {consultas.length > 0 &&
                                consultas.map((consultas) => (
                                    <ConsultasCard
                                        id={consultas.id}
                                        date={consultas.date}
                                        helpsenior={consultas.helpsenior}
                                        hora={consultas.hora}
                                        profissional={consultas.profissional}
                                        local={consultas.local}
                                        observacoes={consultas.observacoes}
                                        key={consultas.id}
                                        handleRemove={removeConsulta}
                                    />

                                ))
                            }
                            {medicamentos.length === 0 && <p>Não há medicamentos cadastrados</p>}
                        </Container>

                    </Container>
                </div>
            ) : (
                <Loading />
            )}
        </>
    )
}

export default Perfil