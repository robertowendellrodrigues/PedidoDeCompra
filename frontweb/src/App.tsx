import Navbar from './Components/Navbar';
import Navicon from './Components/Navicon';
import CRUD_client from './Components/CRUD_client';
import Report_client from './Components/Pages/Report/Report_cliient';
import Report_product from './Components/Pages/Report/Report_product';
import Client from './Components/Pages/Client';

function App() {
  return (
    <>
    
    <Navbar/>
    <Navicon/>    
    <CRUD_client/>
   <Client/>
    
    
    
   </>
  );
}

export default App;
