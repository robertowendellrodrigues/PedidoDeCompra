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
                            <button className='dropbtn'>Movimentação</button>
                            <div className='dropdown-content'>
                                <a href="">NF/NF-e/DAV</a>
                                <a href="">Caixa Central</a>
                                
                            </div>
                        </li>
                        <li className='navbar-manu-mark dropdown'>
                            <button className='dropbtn'>Financeiro</button>
                            <div className='dropdown-content'>
                                <a href="">Contas á pagar</a>
                                <a href="">Contas á receber</a>
                                <a href="">Fluxo de caixa</a>
                                <a href="">Orçamento</a>
                                <a href="">Conciliação de recebíveis</a>
                                
                                
                            </div>
                        </li>
                        <li className='navbar-manu-mark dropdown'>
                            <button className='dropbtn'>Relatório</button>
                            <div className='dropdown-content'>
                                <a href="">Contas á pagar</a>
                                <a href="">Contas á receber</a>
                                <a href="">Fluxo de caixa</a>
                                <a href="">Orçamento</a>
                                <a href="">Conciliação de recebíveis</a>
                                
                                
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