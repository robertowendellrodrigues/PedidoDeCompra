
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Client from "./Components/Pages/Client";
import Home from "./Components/Pages/Home";
import Provider from "./Components/Pages/Provider";
import Navbar from "./Components/Navbar";
import Navicon from "./Components/Navicon";
import Contaspagar from "./Components/Pages/ContasPagar";
import Contasreceber from "./Components/Pages/ContasReceber";
import Estoque from "./Components/Pages/Estoque";
import Caixa from "./Components/Pages/Caixa";
import Banco from "./Components/Pages/Banco";
import Notafiscal from "./Components/Pages/Notafiscal";
import Compra from "./Components/Pages/Compras";
import Pdv from "./Components/Pages/Pdv";
import Emitente from "./Components/Pages/Emitente";
import Config from "./Components/Config";
import Login from "./Components/Config/Auth/Login";
import Recover from "./Components/Config/Auth/Recover";
import Signup from "./Components/Config/Auth/Signup";
/*



*/

export default function App() {



    return (

        <BrowserRouter>
                
            <Navbar/>
            <Navicon/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="cliente" element={<Client />} />
                <Route path="fornecedor" element={<Provider />} />
                <Route path="contaspagar" element={<Contaspagar />} />
                <Route path="contasreceber" element={<Contasreceber />} />
                <Route path="estoque" element={<Estoque />} />
                <Route path="caixa" element={<Caixa />} />
                <Route path="banco" element={<Banco />} />
                <Route path="nf-e" element={<Notafiscal />} />
                <Route path="compra" element={<Compra />} />
                <Route path="login" element={<Login />} />
                <Route path="pdv" element={<Pdv/>}/>
                <Route path="emitente" element={<Emitente/>}/>
                <Route path="recover" element={<Recover/>}/>
                <Route path="signup" element={<Signup/>}/>
                
                


            </Routes>
        </BrowserRouter>
    );
}