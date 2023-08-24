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
            <Content></Content>
        </div>
        <Footer></Footer>
    </>
  )
}

export default home;