import Home from "./components/pages/Home";
import Page404 from "./components/pages/Page404";
import Contato from "./components/pages/Contato";
import QuemSomos from "./components/pages/QuemSomos";
import Services from "./components/pages/Services";
import {Routes, Route} from "react-router-dom";
import './app.css';

const App = () => {
    return (
        <Routes>
                <Route path='/' element={<Home />} />;
                <Route path='/quem-somos' element={<QuemSomos />} />;
                <Route path='/contato' element={<Contato/>} />;
                <Route path='/services' element={<Services />} />;
                <Route path='*' element={<Page404 />} />;
        </Routes>
    )
};

export default App;