import Header from "../layout/Header/Header.jsx";
import Aside from "../layout/aside/Aside.jsx";
import Content from "../layout/content/Content.jsx";
import Footer from "../layout/Footer/Footer.jsx";
import './css/Contato.css'

export const Contato = () => {
  return (
    <>
      <Header />

      <div id="main">

        <Content>

          <div>

            <h1>Contact</h1>

            <h3 className="h3">Número de telefone:</h3>
            <span> *****-****</span>

            <h3>email: </h3>
            <span>exemplo@gmail.com</span>

          </div>

        </Content>

      </div>

      <Footer></Footer>
    </>
  )
}
export default Contato