import styles from '../Perfil/PerfilCard.module.css'
import { BsFillTrashFill } from 'react-icons/bs'

function AlimentacaoCard({ id, tipo, helpsenior, consumidos, restricoes, qtd, handleRemove }) {
    const remove = (e) => {
        e.preventDefault();
        handleRemove(id, helpsenior);
    }

    return (
        <div className={styles.perfil_card}>
            <p>
                <span>Tipo da refeição:</span> {tipo}
            </p>
            <p>
                <span>Alimentos consumidos:</span> {consumidos}
            </p>
            <p>
                <span>Restrições alimentares:</span> {restricoes}
            </p>
            <p>
                <span>Quantidade consumida:</span> {qtd}
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

export default AlimentacaoCard;
