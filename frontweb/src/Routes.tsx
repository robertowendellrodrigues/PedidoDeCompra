
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Client from "./Components/Pages/Client";
import Home from "./Components/Pages/Home";
import Provider from "./Components/Pages/Provider";
import Navbar from "./Components/Navbar";
import Navicon from "./Components/Navicon";
import CRUD_client from "./Components/CRUD_client";
import Contaspagar from "./Components/Pages/ContasPagar";
import Contasreceber from "./Components/Pages/ContasReceber";
import Estoque from "./Components/Pages/Estoque";
import Caixa from "./Components/Pages/Caixa";
import Banco from "./Components/Pages/Banco";
import Notafiscal from "./Components/Pages/Notafiscal";
import Compra from "./Components/Pages/Compras";
import Telalogin from "./Components/Telalogin";
import Pdv from "./Components/Pages/Pdv";


export default function App() {  
    


    return (

        <BrowserRouter>        
            <Navbar/>
            <Navicon />
            <CRUD_client />

            <Routes>
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
                <Route path="login" element={<Telalogin />} />
                <Route path="pdv" element={<Pdv />} />


            </Routes>
        </BrowserRouter>
    );
}