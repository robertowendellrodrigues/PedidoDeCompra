import {ReactComponent as Iconwhatsapp} from './img/whatsapp.svg'
import './styles.css';
const Home = () => {
    return (
        <>
            <div className='home-container'>
                <div className='base-card home-card'>
                    <div className='home-content-container'>
                        <div>
                            <h1>Sistema de controle de pedidos</h1>
                            <p>Contato</p>
                            <p>www.alphatecsistemas.com.br</p>
                            <p>84 9 33161022 <Iconwhatsapp/></p>
                        </div>
                      
                    </div>
                    <div className='home-image-container'>
                    
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
