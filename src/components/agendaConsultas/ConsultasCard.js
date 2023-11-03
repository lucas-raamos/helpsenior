import styles from '../Perfil/PerfilCard.module.css'
import { BsFillTrashFill } from 'react-icons/bs'

function ConsultasCard({ id, date, helpsenior, hora, profissional, local, observacoes, handleRemove }) {
    const remove = (e) => {
        e.preventDefault();
        handleRemove(id, helpsenior);
    }

    return (
        <div className={styles.perfil_card}>
           
            <p>
                <span>Data:</span> {date}
            </p>
            <p>
                <span>Horário:</span> {hora}
            </p>
            <p>
                <span>Profissional:</span> {profissional}
            </p>
            <p>
                <span>Local:</span> {local}
            </p>
            <p>
                <span>Observações:</span> {observacoes}
            </p>
            <div className={styles.perfil_card_actions}>
                <button onClick={remove}>
                    <BsFillTrashFill />
                    Excluir
                </button>
            </div>
        </div>
    )
}

export default ConsultasCard;
