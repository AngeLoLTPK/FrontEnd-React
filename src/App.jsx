import Header from "./Header";
import Aside from "./Aside";
import Content from "./Content";
import Footer from "./Footer";
import './App.css'

const App = () => {
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
};

export default App