import { ReactComponent as Iconwhatsapp } from './img/whatsapp.svg'
import { ReactComponent as Logosistema } from './img/cloud-32.svg'
import { ReactComponent as CloudIcon } from './img/cloudy.svg'
import Navbar from '../../Navbar';
import Navicon from '../../Navicon';
import './styles.css';
const Home = () => {
    return (
        <>
       
            <div className='container-main-homer'>
                <div className='rodateto-home'></div>
                <div className='rodateto-home' >
                    <h6>Página Iniicial</h6>
                </div>
                <div className='nain-tela55'>
                    
                    
                    <div className='tela-a'>
                    <CloudIcon className='icon-home' />
                        <table className='inf-empresa'>
                            <td className='nome-empresa'><Logosistema id='ico-sistema' />Ethan Sistema</td>
                            <td className='slogan'>Implantando gestão, Alcaçando resultados</td>
                            <td>www.alphatecsistemas.com.br</td>
                            <td className='contato'>Contato 84 3316-1022 <th ><Iconwhatsapp className='icon-whatsapp' /></th> </td>
                        </table>
                    </div>



                </div>
            </div>





        </>
    );
}

export default Home;
