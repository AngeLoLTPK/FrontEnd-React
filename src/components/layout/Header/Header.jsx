import './Header.css'
import { Link, NavLink } from 'react-router-dom'
import Button from '../../ui/button.jsx';

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
                <li><Button cor='primary'>Blue</Button></li>
                <li><Button cor='secondary'>Grenn</Button></li>
            </ul>
        </header>
    )
};

export default Header