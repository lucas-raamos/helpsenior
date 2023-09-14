
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
import alimentacao from '../../img/alimentacao.png'
import medicamentos from '../../img/medicamentos.png'
import rotina from '../../img/rotina.png'
import facebook from '../../img/facebook.png'
import twitter from '../../img/twitter.png'
import instagram from '../../img/instagram.png'
import linkedin from '../../img/linkedin.png'

function LandingPage() {
    return (
        <div>
            <div className={styles.background_azul}>
                <header>
                 
                        <nav>
                            <div className={styles.logo_nav}>
                                <Link to="/">
                                    <img src={logo} alt="" />
                                </Link>
                            </div>
                            <ul className={styles.ul}>
                                <li>
                                    <Link to="/login">login</Link>
                                </li>
                                <li>
                                    <Link to="/register"><button className={styles.btn_gradiente}>Cadastre-se</button></Link>
                                </li>
                            </ul>
                            <div className={styles.menu_icon}>
                                <img src={menu} alt='ícone de menu' />
                            </div>
                        </nav>
                    
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
                        Ajudando a manter um registro organizado das necessidades e atividades diárias dos idosos sob seus cuidados.
                    </div>
                    <div className={styles.resultados_numero}>
                        <p>
                            <span>+</span> <br />
                            Cuidados Prestados
                        </p>
                        <p>
                            <span>+</span> <br />
                            Famílias satisfeitas
                        </p>
                        <p>
                            <span>+</span> <br />
                            Momentos de carinho
                        </p>
                    </div>
                </div>
            </section>

            <section className={styles.diferenciais}>
                <div className={styles.container}>
                    <div className={styles.card}>
                        <img src={medal} alt='Medalha' />
                        <h3 className={styles.titulo}>Gestão Personalizada</h3>
                        <p>
                        Nossa plataforma permite que você personalize o plano de cuidados de acordo com as necessidades exclusivas do idoso. Desde a programação de medicamentos até o acompanhamento da alimentação, você está no controle.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <img src={vinte_quatro_hrs} alt='24horas' />
                        <h3 className={styles.titulo}>Disponibilidade 24 Horas</h3>
                        <p>
                        Sabemos que as preocupações podem surgir a qualquer momento. Nossa plataforma está disponível 24 horas por dia, 7 dias por semana, para ajudar a responder a todas as suas perguntas e lidar com emergências.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <img src={caixa} alt='Caixa' />
                        <h3 className={styles.titulo}>Contatos de Emergência</h3>
                        <p>
                        Esteja preparado para qualquer situação, mantenha uma lista de contatos de emergência facilmente acessível para garantir a tranquilidade de todos. Você pode adicionar rapidamente números de telefone de médicos e familiares próximos.
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
                            Nossa missão é proporcionar cuidados que não apenas atendam às necessidades físicas, mas também nutram a alma.
                            Cada sorriso compartilhado, cada história ouvida é parte do nosso compromisso. Seja você um cuidador de idosos experiente ou alguém que está começando agora, nossa plataforma está pronta para ajudá-lo a oferecer os melhores cuidados possíveis. Comece hoje mesmo e simplifique a gestão de cuidados de seus entes queridos.
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
                            <img src={alimentacao} alt='alimentação' />

                            <p className={styles.nome_casa}>Alimentação</p>
                            <p className={styles.contato}>Registro das preferências alimentares e restrições dietéticas dos idosos, garantindo uma alimentação adequada e saudável.</p>

                        </div>
                        <div className={styles.card_item}>
                            <img src={medicamentos} alt='medicamentos' />

                            <p className={styles.nome_casa}>Medicamentos</p>
                            <p className={styles.contato}>Registre detalhes sobre os medicamentos dos idosos e evite erros na administração.</p>

                        </div>
                        <div className={styles.card_item}>
                            <img src={rotina} alt='rotina' />

                            <p className={styles.nome_casa}>Rotina</p>
                            <p className={styles.contato}>Crie e gerencie a rotina diária dos idosos de forma flexível e adaptada às suas necessidades.</p>

                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.newsletter}>
                <div className={styles.container}>
                    <div className={styles.box_newsletter}>
                        <h2>Junte-se à nossa Comunidade de Cuidadores</h2>
                        <p>Faça parte da nossa comunidade e receba dicas essenciais e notícias relevantes sobre o cuidado de idosos.</p>
                        <form>
                            <input type='email' placeholder='Digite o seu email' />
                            <button>Subescrever</button>
                        </form>
                    </div>
                </div>
            </section>

            <footer>
                <div className={styles.container}>
                    <ul>
                        <h3>HELPSENIOR</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem, ipsum dolor
                        </p>
                        <div className={styles.redes_sociais}>
                            <img src={facebook} alt='facebook' />
                            <img src={twitter} alt='twitter' />
                            <img src={instagram} alt='instagram' />
                            <img src={linkedin} alt='linkedin' />
                        </div>
                    </ul>

                    <ul>
                        <h3>Link</h3>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/precos">Preços</Link>
                        </li>
                        <li>
                            <Link to="/baixar">Baixar</Link>
                        </li>
                        <li>
                            <Link to="/sobre">Sobre</Link>
                        </li>
                        <li>
                            <Link to="/servicos">Serviços</Link>
                        </li>
                    </ul>

                    <ul>
                        <h3>Suporte</h3>
                        <li>
                            <Link to="/home">FAQ</Link>
                        </li>
                        <li>
                            <Link to="/home">Como funciona</Link>
                        </li>
                        <li>
                            <Link to="/home">Caracteristícas</Link>
                        </li>
                        <li>
                            <Link to="/contato">Contato</Link>
                        </li>
                        <li>
                            <Link to="/comunicando">Comunicando</Link>
                        </li>
                    </ul>

                    <ul>
                        <h3>Nos contate</h3>
                        <li>
                            <p>+000 12345678</p>
                        </li>
                        <li>
                            <p>helpsenior@gmail.com</p>
                        </li>
                        <li>
                            <p>Brasil</p>
                        </li>

                    </ul>
                </div>
            </footer>
        </div>
    );
}

export default LandingPage;
