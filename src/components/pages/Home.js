import styles from './Home.module.css'
import home from '../../img/home.png'
import LinkButton from '../layout/LinkButton'


function Home(){
    return (
        <section className={styles.home_container}>
            <h1>Bem-vindo ao<span>HelpSenior</span></h1>
            <p>Comece adicionando um perfil</p>
            <LinkButton to='/newperfil' text='Criar Perfil' />
            <img src={home} alt='HelpSenior'className={styles.home_logo}/>
        </section>
    )

    }


export default Home