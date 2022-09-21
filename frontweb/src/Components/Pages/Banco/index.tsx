import './styles.css';
import { Link } from 'react-router-dom';

const Banco = () => {
    return (
        <>
            <div className='client-container-main'>
                <div className='rodateto'>Banco</div>
                <div className='client-nain'>
                    <div className='client-tela1'>
                        <table className='client-tabela'>
                            <div className='endereço-client'>
                                <table className='client-tabela'>
                                    <td className='td-tamanho'>Código:<input className='inp-7dig'></input></td>
                                    <td className='td-tamanho'>Nome:<input className='inp-40dig'></input></td>
                                    <td className='td-tamanho'>CPF/CNPJ:<input className='inp-15dig'></input></td>
                                    <td className='td-tamanho'>RG/INSCR:<input></input></td>
                                    <td className='td-tamanho'>Dt Identidade:<input className='inp-7dig'></input></td>
                                    <td className='td-tamanho'>Fantasia:<input className='inp-60dig'></input></td>
                                </table>
                            </div>
                            
                            <div className='forma-contato-client'>
                                <h4>Contas bancária</h4>
                                <table className='client-tabela'>
                                    <td className='td-tamanho inp-15dig'>Formas de Contato:<select name="" id=""></select> </td>
                                    <td className='td-tamanho'>Fone, e-mail, rede social, etc<input className='inp-30dig'></input></td>
                                    <input type="text" className='inp-80dig' />
                                </table>
                            </div>
                        </table>
                    </div>

                    <div className='client-tela2'>
                        <table className='client-tabela'>
                            <div className='endereço-client2'>
                                <div className='botao-menu'>
                                    <button className='bnt-tabs-client' >Geral</button>
                                    <button className='bnt-tabs-client'>Tributos</button>
                                    <button className='bnt-tabs-client'>Revenda</button>
                                </div>
                                <div>
                                </div>
                                <table className='client-tabela2'>
                                    <h2>Banco</h2>
                                    
                                </table>
                            </div>
                        </table>
                    </div>

                </div>
            </div>
        </>

    );
}

export default Banco