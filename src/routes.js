import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Filme from './pages/Filme';

import Header from './components/Header' // Realizando o import

function RoutesApp(){
    return(
        <BrowserRouter>

            <Header /> {/*// Inserindo o componente */}

            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/filme/:id" element={ <Filme/> } />
            </Routes>

        </BrowserRouter>
    )
}

export default RoutesApp;




