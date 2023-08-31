import './Header.css'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <h1>Olá Visitante!</h1>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/quem-somos'>Quem somos</NavLink></li>
                <li><NavLink to='/contato'>Contato</NavLink></li>
                <li><NavLink to='/Services'>Serviços</NavLink></li>
                <li><NavLink to='/*'></NavLink></li>
            </ul>
        </header>
    )
};

export default Header