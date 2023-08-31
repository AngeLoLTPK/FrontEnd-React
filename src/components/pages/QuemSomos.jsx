import Header from "../layout/Header/Header.jsx";
import Aside from "../layout/aside/Aside.jsx";
import Content from "../layout/content/Content.jsx";
import Footer from "../layout/Footer/Footer.jsx";

export const QuemSomos = () => {
  return (
    <>   
      <Header />
        <div id="main">
            <Aside></Aside>
            <Content>
            <h1>Who i am</h1>

            <p>My name is angelo, i have seventhee years, i am finishing the high scholl, and te</p>
            </Content>
        </div>
        <Footer></Footer>
    </>
  )
}

export default QuemSomos;