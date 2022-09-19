import './styles.css';
import { ReactComponent as Iconlist } from './img/door-open.svg'
import { ReactComponent as Buttonmobile } from './img/list-ul.svg'


const Navbar = () => {
    return (
        <>

            <div className='navbar-container'>
                <button className='button-mobile'><Buttonmobile /></button>
                <div className='navbar-menu'>
                
                    <ul>                 

                        <li className='navbar-manu-mark dropdown'>
                            <button className='dropbtn'> Cadastro</button>
                            <div className='dropdown-content'>
                                <a href="">Fornecedor</a>
                                <a href="">Produto</a>
                                <a href="">Usuário</a>
                            </div>
                        </li>
                        <li className='navbar-manu-mark dropdown'>
                            <button className='dropbtn'>Configurações</button>
                            <div className='dropdown-content'>
                                <a href="">Fornecedor</a>
                                <a href="">Produto</a>
                                <a href="">Usuário</a>
                            </div>
                        </li>
                        <li className='navbar-manu-mark dropdown'>
                            <button className='dropbtn'>Sobre</button>
                            <div className='dropdown-content'>
                                <a href="">Fornecedor</a>
                                <a href="">Produto</a>
                                <a href="">Usuário</a>
                            </div>
                        </li>
                        <li className='navbar-manu-mark dropdown'>
                            <button className='dropbtn'> Sair</button>
                            
                        </li>
                        


                    </ul>

                </div>
                
                
                

                
                
            </div>



        </>
    );
}

export default Navbar;