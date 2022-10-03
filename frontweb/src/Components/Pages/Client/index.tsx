import './styles.css';
import { Fetcher } from 'react-router-dom';
import CRUD_client from '../../CRUD_client';
import Navicon from '../../Navicon';

const Client = () => {
    
   
    return (
        <>
      
            <div className='client-container-main-1'>
                <CRUD_client/>
                <div className='rodateto-pagina-glob'>Cliente</div>
                <div className='nain-tela-glob'>
                    <div className='client-tela1'>
                        <table className='client-tabela'>
                            <div className='endereço-client'>
                                <table className='client-tabela'>
                                    <td className='td-tamanho'>Código:<input className='inp-7dig' placeholder='00001'></input></td>
                                    <td className='td-tamanho'>Nome:<input className='inp-40dig' placeholder='Razão Social'></input></td>
                                    <td className='td-tamanho'>CPF/CNPJ:<input className='inp-15dig' placeholder='00.000.000/0001-00'></input></td>
                                    <td className='td-tamanho'>RG/INSCR:<input placeholder='0.000.000'></input></td>
                                    <td className='td-tamanho'>Dt Identidade:<input className='inp-7dig' placeholder='18/12/1998'></input></td>
                                    <td className='td-tamanho'>Fantasia:<input className='inp-60dig' placeholder='Nome Fantazia'></input></td>
                                </table>
                            </div>
                            <div className='endereço-client'>
                                <div className='botao-menu'>
                                    <button className='bnt-tabs-client' >Endereço</button>
                                    <button className='bnt-tabs-client'>Endereço Cobrança</button>
                                    <button className='bnt-tabs-client'>Endereço de Entrega</button>
                                </div>
                                <table className='client-tabela'>
                                    <td className='td-tamanho'>CEP:<input className='inp-7dig' type="text" placeholder='00000-000'></input></td>
                                    <td className='td-tamanho'>Logradouro:<input className='inp-40dig' placeholder='Logradouro'></input></td>
                                    <td className='td-tamanho'>Numero:<input className='inp-5dig' placeholder='01'></input></td>
                                    <td className='td-tamanho'>Complemento:<input></input></td>
                                    <td className='td-tamanho'>Bairro:<input placeholder='Bairro'></input></td>
                                    <td className='td-tamanho inp-3dig'>UF:<select name="" id="" placeholder='RN'></select> </td>
                                    <td className='td-tamanho inp-15dig'>Cidade:<select name="" id="" placeholder='Cidade'></select> </td>
                                </table>
                            </div>
                            <div className='forma-contato-client'>
                                <table className='client-tabela'>
                                    <td className='td-tamanho inp-15dig'>Formas de Contato:<select name="" id="">Telefone</select> </td>
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
                                    <td className='td-tamanho'>CEP:<input className='inp-7dig'></input></td>
                                    <td className='td-tamanho'>Logradouro:<input className='inp-40dig'></input></td>
                                    <td className='td-tamanho'>Numero:<input className='inp-5dig'></input></td>
                                    <td className='td-tamanho'>Complemento:<input></input></td>
                                    <td className='td-tamanho'>Bairro:<input></input></td>
                                    <td className='td-tamanho inp-3dig'>UF:<select name="" id=""></select> </td>
                                    <td className='td-tamanho inp-15dig'>Cidade:<select name="" id=""></select> </td>
                                </table>
                            </div>
                        </table>
                    </div>

                </div>
            </div>
        </>

    );
}

export default Client