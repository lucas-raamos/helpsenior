import styles from './Home.module.css'
import home from '../../img/home.png'


function Home(){
    return (
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>HelpSenior</span></h1>
            <p>Comece adicionando um perfil</p>
            <a href='/'>Criar Perfil</a>
            <img src={home} alt='HelpSenior' />
        </section>
    )

    }


export default Home