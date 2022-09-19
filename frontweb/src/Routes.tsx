
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
export default function App() {
    return (
        <BrowserRouter>
            
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="home" element={<Home />}/>
              
                
            </Routes>
        </BrowserRouter>
    );
}