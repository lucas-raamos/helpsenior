
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png'
import styles from './LandingPage.module.css';
import verificado from '../../img/verificado.png';
import img1 from '../../img/img1.png';
import menu from '../../img/menu.png';
import medal from '../../img/medal.png';
import vinte_quatro_hrs from '../../img/24h.png';
import caixa from '../../img/caixa.png';
import casa from '../../img/casa.png'
import user_happy from '../../img/user-happy.png'
import casa1 from '../../img/casa1.png'
import casa2 from '../../img/casa2.png'
import casa3 from '../../img/casa3.png'

function LandingPage() {
    return (
        <div>
            <div className={styles.background_verde}>
                <header>
                    <div className={styles.container}>
                        <nav>
                            <div className={styles.logo_nav}>
                            <Link to="/">
                                <img src={logo} alt="" />
                            </Link>
                            </div>
                            <ul className={styles.ul}>
                                <li> <a href='#'> Home</a> </li>
                                <li> <a href='#'> Sobre</a> </li>
                                <li> <a href='#'> Tipo de casa</a> </li>
                                <li> <a href='#'> Contato</a> </li>
                                <li> <a href='#'> <button className={styles.btn_gradiente}>Login</button></a> </li>
                            </ul>
                            <div className={styles.menu_icon}>
                                <img src={menu} alt='ícone de menu' />
                            </div>
                        </nav>
                    </div>
                </header>

                <main>
                    <div className={styles.container}>
                        <div className={styles.main_text}>
                            <h1>Cuidado Dedicado</h1>
                            <h2>Tradição e acolhimento</h2>
                            <div>
                                <button className={styles.btn_gradiente}>Começar agora</button>
                                <img src={verificado} alt='Verificado' />
                            </div>
                        </div>
                        <div className={styles.main_img}>
                            <img src={img1} alt='3 homens sorrindo' />
                        </div>
                    </div>
                </main>
            </div>

            <section className={styles.resultados}>
                <div className={styles.container}>
                    <div className={styles.resultados_text}>
                        Ajudando pessoas e empresas com foco no conforto.
                    </div>
                    <div className={styles.resultados_numero}>
                        <p>
                            <span>+50 mil</span> <br />
                            Cuidados Prestados
                        </p>
                        <p>
                            <span>+20 mil</span> <br />
                            Famílias satisfeitas
                        </p>
                        <p>
                            <span>+60 mil</span> <br />
                            Momentos de carinho
                        </p>
                    </div>
                </div>
            </section>

            <section className={styles.diferenciais}>
                <div className={styles.container}>
                    <div className={styles.card}>
                        <img src={medal} alt='Medalha' />
                        <h3 className={styles.titulo}>Empresa Profissional</h3>
                        <p>
                            Oferecendo cuidados personalizados com uma equipe experiente para garantir o bem-estar dos idosos sob seus cuidados.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <img src={vinte_quatro_hrs} alt='24horas' />
                        <h3 className={styles.titulo}>Disponibilidade 24 Horas</h3>
                        <p>
                            Nossa equipe de consultores está disponível 24 horas por dia, 7 dias por semana, para responder a quaisquer perguntas ou preocupações que você possa ter.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <img src={caixa} alt='Caixa' />
                        <h3 className={styles.titulo}>Servindo em vários países</h3>
                        <p>
                            Levando nossos serviços de cuidado a diversos países para garantir que idosos de todo o mundo recebam a atenção que merecem.
                        </p>
                    </div>
                </div>
            </section>

            <section className={styles.casa}>
                <div className={styles.container}>
                    <div className={styles.casa_img}>
                        <img src={casa} alt='Minha futura casa' />
                    </div>
                    <div className={styles.casa_text}>
                        <h2>Cuidado Compassivo</h2>
                        <p>
                            Nossa missão é proporcionar cuidados que não apenas atendam às necessidades físicas, mas também nutram a alma. Cada sorriso compartilhado, cada história ouvida é parte do nosso compromisso.
                        </p>
                        <img src={user_happy} alt='User Happy' />
                        <p>
                            <b>+50 usuários felizes</b>
                        </p>
                    </div>
                </div>
            </section>
            <section className={styles.melhores_lugares}>
                <div className={styles.container}>
                    <p className={styles.azul}>Escolha seu melhor</p>
                    <h2>Gerencie pessoas de maneira organizada</h2>

                    <div className={styles.cards}>
                        <div className={styles.card_item}>
                            <img src={casa1} alt='casa1' />
                            <p className={styles.local_casa}>Medicamentos</p>
                            <p className={styles.nome_casa}>Alimentação</p>
                            <p className={styles.contato}>
                                Rotina 1234 567 8900 <br /> helpsenior@gmail.com
                                </p>
                                <button>3 propriedades</button>
                        </div>
                        <div className={styles.card_item2}>
                            <img src={casa2} alt='casa2' />
                            <p className={styles.local_casa}>Medicamentos</p>
                            <p className={styles.nome_casa}>Alimentação</p>
                            <p className={styles.contato}>
                                Rotina 1234 567 8900 <br /> helpsenior@gmail.com
                                </p>
                                <button>3 propriedades</button>
                        </div>
                        <div className={styles.card_item3}>
                            <img src={casa3} alt='casa3' />
                            <p className={styles.local_casa}>Medicamentos</p>
                            <p className={styles.nome_casa}>Alimentação</p>
                            <p className={styles.contato}>
                                Rotina 1234 567 8900 <br /> helpsenior@gmail.com
                                </p>
                                <button>3 propriedades</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default LandingPage;
