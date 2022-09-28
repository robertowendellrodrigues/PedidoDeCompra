import {ReactComponent as Logosistema} from './img/cloud-32.svg'
import './styles.css'
const Telalogin = () => {
    return (
        <>
            <div className="container-main-login">
                <div className="main-login">
                    <div className="divi-logo-sistema">
                      <Logosistema className='logo-sistema'/>  <h2>Ethan Sistema</h2>
                    </div>
                    <h5>Seja bem-vindo</h5>
                    <div className="inf-login">
                        <h6>Usuário:</h6> <input className="inp-senha-login"/>
                    </div>
                    <div className="inf-login">
                        <h6>Senha:</h6> <input className="inp-senha-login"/>
                    </div>
                    <div className='div-link-login'>
                    <a href="" >Esqueci minha senha</a>
                    </div>
                        
                    
                    <div className='div-btn-enter'>
                        <button className='btn-enter-login'>Entrar</button>
                    </div>

                </div>
            </div>




        </>
    )
}
export default Telalogin;