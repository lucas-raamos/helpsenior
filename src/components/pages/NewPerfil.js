
import PerfilForm from '../Perfil/PerfilForm';
import styles from './NewPerfil.module.css';

function NewPerfil() {

return (
    <div className={styles.newperfil_container}>
      <h1>Criar Perfil</h1>
      <p>Crie um perfil para depois adicionar um medicamento</p>
      <PerfilForm btnText='Criar Perfil' />
    </div>
  );
}
export default NewPerfil;
