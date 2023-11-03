import styles from '../Perfil/PerfilCard.module.css'
import { BsFillTrashFill } from 'react-icons/bs'

function MedicamentoCard({ id, name, helpsenior, dosagem, horario, observacao, handleRemove }) {
    const remove = (e) => {
        e.preventDefault();
        handleRemove(id, helpsenior);
    }

    return (
        <div className={styles.perfil_card}>
            <h4>{name}</h4>
            <p>
                <span>Dosagem:</span> {dosagem}
            </p>
            <p>
                <span>Horário:</span> {horario}
            </p>
            <p>
                <span>Observações:</span> {observacao}
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

export default MedicamentoCard;
