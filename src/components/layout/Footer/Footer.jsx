import './Footer.css'
import useUserStore from '../../../store/userStore';

export const Footer = () => {

  const nameUser = useUserStore((state) => state.name)

  return (
    <div id='Footer'>{nameUser}</div>
  )
}

export default Footer;