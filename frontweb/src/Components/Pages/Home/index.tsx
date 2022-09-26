import {ReactComponent as Iconwhatsapp} from './img/whatsapp.svg'
import {ReactComponent as Logosistema} from './img/cloud-32.svg'
import './styles.css';
const Home = () => {
    return (
        <>
        <div className='container-main'>
                <div className='rodateto'>Página Inicial</div>
                <div className='nain-tela'>
                    <div className='tela-a'>
                    <table className='inf-empresa'>                            
                                <td><Logosistema id='ico-sistema'/>Ethan</td>
                                <td>Alphatec Sistemas</td>
                                <td>www.alphatecsistemas.com.br</td>
                                <td>Contato 84 9 33161022 <Iconwhatsapp id='ico-whatsapp'/></td>
                            </table> 
                    </div>

                  

                </div>
            </div>




           
        </>
    );
}

export default Home;
