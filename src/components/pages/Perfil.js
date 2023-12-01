import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import MedicamentoCard from '../medicamentos/MedicamentoCard';
import Message from '../layout/Message';
import Container from '../layout/Container';
import Loading from '../layout/Loading';
import PerfilForm from '../Perfil/PerfilForm';
import MedicamentoForm from '../medicamentos/MedicamentoForm';
import { GiMedicines } from 'react-icons/gi';
import { MdOutlineFoodBank } from "react-icons/md";
import ConsultasForm from '../agendaConsultas/ConsultasForm';
import ConsultasCard from '../agendaConsultas/ConsultasCard';
import { BsJournalCheck } from 'react-icons/bs';
import jsPDF from 'jspdf'; // Importe jsPDF para criar o PDF no cliente
import styles from './Perfil.module.css'; // Importe os estilos apropriados
import card2 from '../../img/card2.png'
import AlimentacaoForm from '../alimentacao/AlimentacaoForm';
import AlimentacaoCard from '../alimentacao/AlimentacaoCard';

function Perfil() {
    const { id } = useParams()

    const [perfil, setPerfil] = useState([])
    const [medicamentos, setMedicamentos] = useState([])
    const [showPerfilForm, setShowPerfilForm] = useState(false)
    const [showMedicamentoForm, setShowMedicamentoForm] = useState(false)
    const [showConsultasForm, setShowConsultasForm] = useState(false)
    const [consultas, setConsultas] = useState([])
    const [showAlimentacaoForm, setShowAlimentacaoForm] = useState(false)
    const [alimentos, setAlimentos] = useState([])
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
                    setAlimentos(data.alimentos)
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
                window.scrollTo({ top: 0, behavior: 'smooth' });
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
        perfil.helpsenior = newHelpSenior
        fetch(`http://localhost:5000/perfis/${perfil.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application.json',
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

    function createAlimento(perfil) {
        setMessage('')
        const lastAlimento = perfil.alimentos[perfil.alimentos.length - 1]
        lastAlimento.id = uuidv4()
        const lastAlimentoHelpSenior = lastAlimento.helpsenior
        const newHelpSenior = parseFloat(perfil.helpsenior) + parseFloat(lastAlimentoHelpSenior)
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
                setShowAlimentacaoForm(false)
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

        fetch(`http://localhost:5000/perfis/${perfil.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ medicamentos: medicamentosUpdated }),
    })
        .then((resp) => resp.json())
        .then((data) => {
            setMedicamentos(medicamentosUpdated);
            setMessage('Medicamento removido com sucesso!');
            setType('success');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        })
        .catch((err) => console.log(err));
}

function removeConsulta(id, helpsenior) {
    const consultasUpdated = consultas.filter(
        (consulta) => consulta.id !== id
    );

    const newHelpSenior = parseFloat(perfil.helpsenior) - parseFloat(helpsenior);

    fetch(`http://localhost:5000/perfis/${perfil.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ helpsenior: newHelpSenior, consultas: consultasUpdated }),
    })
        .then((resp) => resp.json())
        .then((data) => {
            setConsultas(consultasUpdated);
            setPerfil({ ...perfil, helpsenior: newHelpSenior });
            setMessage('Consulta removida com sucesso!');
            setType('success');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        })
        .catch((err) => console.log(err));
}

function removeAlimento(id, helpsenior) {
    const alimentosUpdated = alimentos.filter(
        (alimento) => alimento.id !== id
    );

    const newHelpSenior = parseFloat(perfil.helpsenior) - parseFloat(helpsenior);

    fetch(`http://localhost:5000/perfis/${perfil.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ helpsenior: newHelpSenior, alimentos: alimentosUpdated }),
    })
        .then((resp) => resp.json())
        .then((data) => {
            setAlimentos(alimentosUpdated);
            setPerfil({ ...perfil, helpsenior: newHelpSenior });
            setMessage('Alimento removido com sucesso!');
            setType('success');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        })
        .catch((err) => console.log(err));
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
    function toggleAlimentacaoForm() {
        setShowAlimentacaoForm(!showAlimentacaoForm)
    }

    // Função para gerar o PDF diretamente na mesma página
    const gerarPDF = () => {
        if (perfil && perfil.name) {
            const doc = new jsPDF();
            doc.internal.scaleFactor = 2;
    
            // Adicione a fonte TrueType (TTF) que suporta caracteres especiais
            doc.addFileToVFS('font.ttf', 'path/to/font.ttf');
            doc.addFont('font.ttf', 'CustomFont', 'normal');
    
            doc.setFont('CustomFont', 'bold'); // Define a fonte como negrito
    
            doc.setFontSize(18);
    
            const imgData = card2;
            const imageWidth = doc.internal.pageSize.width - 10;
            const imageHeight = doc.internal.pageSize.height - 10;
    
            const imageX = (doc.internal.pageSize.width - imageWidth) / 2;
            const imageY = (doc.internal.pageSize.height - imageHeight) / 2;
    
            doc.addImage(imgData, 'JPEG', imageX, imageY, imageWidth, imageHeight);
    
            doc.text('Nome:', imageX + 40, imageY + imageHeight / 2 + 20);
            doc.text('Peso:', imageX + 40, imageY + imageHeight / 2 + 30);
            doc.text('Gênero:', imageX + 40, imageY + imageHeight / 2 + 40);
            doc.text('Data de Nascimento:', imageX + 40, imageY + imageHeight / 2 + 50);
            doc.text('Contato de emergência:', imageX + 40, imageY + imageHeight / 2 + 60);
    
            doc.setFont('CustomFont', 'normal'); // Retorna a fonte ao normal
            
    
            doc.text(`${perfil.name}`, imageX + 60, imageY + imageHeight / 2 + 20);
            doc.text(`${perfil.peso}`, imageX + 55, imageY + imageHeight / 2 + 30);
            doc.text(`${perfil.genero.name}`, imageX + 65, imageY + imageHeight / 2 + 40);
            doc.text(`${perfil.date}`, imageX + 98, imageY + imageHeight / 2 + 50);
            doc.text(`${perfil.cttemergencia}`, imageX + 105, imageY + imageHeight / 2 + 60);
    
            doc.save('relatorio.pdf');
        }
    };
    

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
                                        <span>Peso:</span> {perfil.peso}
                                    </p>
                                    <p>
                                        <span>Gênero:</span> {perfil.genero.name}
                                    </p>
                                    <p>
                                        <span>Data de nascimento:</span> {perfil.date}
                                    </p>
                                    <p>
                                        <span>Contato de emergência:</span> {perfil.cttemergencia}
                                    </p>

                                    <br />
                                    {/*} <Link to={`/perfil/${perfil.id}/card`}>
                                        <button className={styles.btn_relatorio}>Card</button>
                                   // </Link>
                                    {/* Adicione o botão de geração de PDF diretamente aqui */}
                                    <button className={styles.btn_relatorio} onClick={gerarPDF}>Gerar PDF</button>
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
                        <br />
                        <div className={styles.medicamentos_form_container}>
                            <h2>Adicione uma medicação:</h2>
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
                        <br />
                        <div className={styles.medicamentos_form_container}>
                            <h2>Adicione uma consulta:</h2>
                            <button className={styles.btn} onClick={toggleConsultasForm}>
                                {!showConsultasForm ? 'Adicionar consulta' : 'Fechar'}
                            </button>
                            <div className={styles.perfil_info}>
                                {showConsultasForm && <ConsultasForm
                                    handleSubmit={createConsulta}
                                    btnText='Adicionar consulta'
                                    perfilData={perfil}
                                />}
                            </div>
                        </div>
                        <br />
                        <div className={styles.medicamentos_form_container}>
                            <h2>Adicione uma refeição:</h2>
                            <button className={styles.btn} onClick={toggleAlimentacaoForm}>
                                {!showAlimentacaoForm ? 'Adicionar refeição' : 'Fechar'}
                            </button>
                            <div className={styles.perfil_info}>
                                {showAlimentacaoForm && <AlimentacaoForm
                                    handleSubmit={createAlimento}
                                    btnText='Adicionar refeição'
                                    perfilData={perfil}
                                />}
                            </div>
                        </div>
                        <br />
                        <h2 className={styles.title}>
                            <span className={styles.icon}>
                                <GiMedicines size="1.3em" />
                            </span>
                            Medicamentos
                        </h2>

                        <Container customClass='start'>
                            {medicamentos.length > 0 &&
                                medicamentos.map((medicamento) => (
                                    <MedicamentoCard
                                        id={medicamento.id}
                                        name={medicamento.name}
                                        helpsenior={medicamento.helpsenior}
                                        dosagem={medicamento.dosagem}
                                        horario={medicamento.horario}
                                        observacao={medicamento.observacao}
                                        key={medicamento.id}
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
                                consultas.map((consulta) => (
                                    <ConsultasCard
                                        id={consulta.id}
                                        date={consulta.date}
                                        helpsenior={consulta.helpsenior}
                                        hora={consulta.hora}
                                        profissional={consulta.profissional}
                                        local={consulta.local}
                                        observacoes={consulta.observacoes}
                                        key={consulta.id}
                                        handleRemove={removeConsulta}
                                    />
                                ))
                            }
                            {consultas.length === 0 && <p>Não há consultas cadastradas</p>}
                        </Container>
                        <br />
                        <h2 className={styles.title}>
                            <span className={styles.icon}>
                                <MdOutlineFoodBank size="1.6em" />
                            </span>
                            Alimentos
                        </h2>
                        <Container customClass='start'>
                            {alimentos.length > 0 &&
                                alimentos.map((alimento) => (
                                    <AlimentacaoCard
                                        id={alimento.id}
                                        helpsenior={alimento.helpsenior}
                                        tipo={alimento.tipo}
                                        consumidos={alimento.consumidos}
                                        restricoes={alimento.restricoes}
                                        qtd={alimento.qtd}
                                        key={alimento.id}
                                        handleRemove={removeAlimento}
                                    />
                                ))
                            }
                            {alimentos.length === 0 && <p>Não há refeições cadastradas</p>}
                        </Container>
                    </Container>
                </div>
            ) : (
                <Loading />
            )}
        </>
    )
}

export default Perfil;
