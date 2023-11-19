import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PerfilCard.module.css';
import { BsFillTrashFill, BsFillPersonFill } from 'react-icons/bs';

function PerfilCard({ id, name, date, peso, genero, cttemergencia, handleRemove }) {

    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    }

    const scrollToTop = () => {
        window.scrollTo(0, 0); // Rolando a página para o topo
    }

    return (
        <div className={styles.perfil_card}>
            <h4>{name}</h4>
            <p>
                <span>Data de nascimento: </span> {date}
            </p>
            <p>
                <span>Peso:</span> {peso}
            </p>
            <p className={styles.genero_text}>
                <span className={`${styles[genero.toLowerCase()]}`} /> {genero}
            </p>
            <p>
                <span>Contato de emergência:</span> {cttemergencia}
            </p>
            <div className={styles.perfil_card_actions}>
                <Link to={`/perfil/${id}`} onClick={scrollToTop}>
                    <BsFillPersonFill /> Ficha
                </Link>
                <button onClick={remove}>
                    <BsFillTrashFill /> Excluir
                </button>
            </div>
        </div>
    );
}

export default PerfilCard;
