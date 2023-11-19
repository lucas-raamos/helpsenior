import styles from './Home.module.css'
import home from '../../img/home.png'
import LinkButton from '../layout/LinkButton'


function Home() {
    return (
        <section className={styles.home_container}>
            <main>
                <div className={styles.container}>
                <div className={styles.main_img}>
                        <img src={home} alt='4 idosos sorrindo' />
                    </div>
                    <div className={styles.main_text}>
                        <h1>Bem-vindo</h1>
                        <h2>Comece adicionando um perfil</h2>
                        <div>
                            <LinkButton to='/newperfil' text='Criar Perfil' />

                        </div>
                    </div>
                   
                </div>
            </main>


        </section>
    )

}


export default Home