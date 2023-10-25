import './Header.css'
import { Link, NavLink } from 'react-router-dom'
import Button from '../../ui/button.jsx';
import useUserStore from '../../../store/userStore';

const Header = () => {

    const nameUser = useUserStore((state) => state.name)
    const isLogged = useUserStore((state) => state.isLogged)
    const userLogged = useUserStore((state) => state.login)
    const logoutUser = useUserStore((state) => state.logout)

    return (
        <header>
            <h1>Olá Visitante! - {nameUser}</h1>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/quem-somos'>Quem somos</NavLink></li>
                <li><NavLink to='/contato'>Contato</NavLink></li>
                <li><NavLink to='/Services'>Serviços</NavLink></li>
                {
                  isLogged ? 
                    <li><Button cor="primary" onClick={() => logoutUser()}>Logout</Button></li>
                  :
                    <li><Button cor="primary" onClick={() => userLogged({
                      name: "Angelo",
                      email: "angelogm@gmail.com",
                      photo: "..."
                    })}>Login</Button></li>
                }

                <li><Button cor='secondary'>Cadastre-se</Button></li>
            </ul>
        </header>
    )
};

export default Header