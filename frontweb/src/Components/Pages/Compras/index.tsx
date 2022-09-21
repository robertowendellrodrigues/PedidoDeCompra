import './styles.css';
import { Link } from 'react-router-dom';

const Compra = () => {
    return (
        <>
            <div className='client-container-main'>
                <div className='rodateto'>Compras</div>
                <div className='client-nain'>
                    <div className='client-tela1'>
                        <table className='client-tabela'>
                            <div className='endereço-client'>
                                <table className='client-tabela'>
                                    <td className='td-tamanho'>Compras:<input className='inp-7dig'></input></td>
                                    <td className='td-tamanho'>Natureza da operação:<input className='inp-40dig'></input></td>
                                    <td className='td-tamanho'>CPF/CNPJ:<input className='inp-15dig'></input></td>
                                    <td className='td-tamanho'>RG/INSCR:<input></input></td>
                                    <td className='td-tamanho'>Dt Identidade:<input className='inp-7dig'></input></td>
                                    <td className='td-tamanho'>Fantasia:<input className='inp-60dig'></input></td>
                                </table>
                            </div>
                            <div className='endereço-client'>
                                <div className='botao-menu'>
                                    <button className='bnt-tabs-client' >Endereço</button>
                                    <button className='bnt-tabs-client'>Endereço Cobrança</button>
                                    <button className='bnt-tabs-client'>Endereço de Entrega</button>
                                </div>
                                <table className='client-tabela'>
                                    <td className='td-tamanho'>CEP:<input className='inp-7dig'></input></td>
                                    <td className='td-tamanho'>Logradouro:<input className='inp-40dig'></input></td>
                                    <td className='td-tamanho'>Numero:<input className='inp-5dig'></input></td>
                                    <td className='td-tamanho'>Complemento:<input></input></td>
                                    <td className='td-tamanho'>Bairro:<input></input></td>
                                    <td className='td-tamanho inp-3dig'>UF:<select name="" id=""></select> </td>
                                    <td className='td-tamanho inp-15dig'>Cidade:<select name="" id=""></select> </td>
                                </table>
                            </div>
                            <div className='forma-contato-client'>
                                
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
                                    <h2>Pedido de Compra</h2>
                                    
                                </table>
                            </div>
                        </table>
                    </div>

                </div>
            </div>
        </>

    );
}

export default Compra