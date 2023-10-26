import {Link} from "react-router-dom"
import Container from "./Container"
import styles from './Navbar.module.css'
import logo from '../../img/logo.png'


function NavBar(){
    return (
        <nav className={styles.navbar}>
        <Container>
        <div className={styles.logo_nav}>
        <Link to="/">
            <img src={logo} alt="" />
        </Link>
        </div>
        <ul className={styles.list}>
            <li className={styles.item}>
                <Link to="/home">Home</Link>
            </li>
            <li className={styles.item}>
                <Link to="/perfis">Perfis</Link>
            </li>
            <li className={styles.item}> 
                <Link to="/company">Empresa</Link>
            </li>
            <li className={styles.item}>
                <Link to="/contact">Contato</Link>
            </li>
            <li className={styles.item}>
                <Link to="/contact">Cuidadores</Link>
            </li>
            <li className={styles.item}>
                <Link to="/contact">Sair</Link>
            </li>
          
        </ul>

        </Container>
      </nav>
    )

}

export default NavBar;