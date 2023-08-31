import Header from "../layout/Header/Header.jsx";
import Aside from "../layout/aside/Aside.jsx";
import Content from "../layout/content/Content.jsx";
import Footer from "../layout/Footer/Footer.jsx";

export const home = () => {
  return (
    <>   
      <Header />
        <div id="main">
            <Aside></Aside>
            <Content>
              <h1>Home</h1>
              <p>Aqui é a página da home, aqui vai ser a primeira página do projeto react a ser desenvolvida</p>
            </Content>
        </div>
        <Footer></Footer>
    </>
  )
}

export default home;