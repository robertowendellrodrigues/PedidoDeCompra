import './styles.css'
import Iconlog from '../../Iconlogin'

const Pdv = () => {
    return (
        <>
            <div className="container-main">
                <div className="herder-pdv">
                    <div className="inf-operacao-pdv">
                        <h2>Ethan Pdv</h2>
                    </div>
                    <div className="inf-operacao-pdv">
                        <h6>Tipo de operação:</h6><a href="">Venda PDV</a>
                    </div>
                    <div className="inf-operacao-pdv">
                        <h6>Usuário:</h6> <a href="">Pedro</a> <h6>Série:</h6><a href="">1</a>
<Iconlog/>

                    </div>



                </div>
                <div className="head-pdv">
                    <a href=""># Caderno 12 Matérias</a>

                </div>
                <div className="body-pdv">

                    <div className="desc-pro-pdv">

                        <div className="coluna2">
                            <table className='inf-item-pdv'>

                                <td>
                                    <h6>Código</h6><input type="text" className='inp-produto-pdv coidigo-pro-pdv' />
                                </td>
                                <td>
                                    <h6>Quantidade</h6><input type="text" className='inp-produto-pdv' />
                                </td>
                                <td>
                                    <h6>Valor Unitário</h6><input type="text" className='inp-produto-pdv' />
                                </td>
                                <td>
                                    <h6>Valor Total do Item</h6><input type="text" className='inp-produto-pdv' />
                                </td>

                            </table>

                        </div>
                        <div className="coluna1">
                            <input type="text" className='lista-item-pdv' />

                        </div>
                        <div className="coluna3">


                            <table className='teclado-main-pdv'>
                                <td className='teclado-pdv ' >
                                    <th className='teclas-pdv teclas-inf-pdv'>Esc</th>
                                    <th className='teclas-pdv teclas-inf-pdv'>Limpar</th>
                                    <th className='teclas-pdv teclas-inf-pdv'>Super</th>
                                </td>
                                <td className='teclado-pdv' >
                                    <th className='teclas-pdv'>7</th>
                                    <th className='teclas-pdv'>8</th>
                                    <th className='teclas-pdv'>9</th>
                                    <th className='teclas-pdv'>*</th>
                                </td>
                                <td className='teclado-pdv' >
                                    <th className='teclas-pdv'>4</th>
                                    <th className='teclas-pdv'>5</th>
                                    <th className='teclas-pdv'>6</th>
                                    <th className='teclas-pdv' id='tecla-enter'>Enter</th>
                                </td>
                                <td className='teclado-pdv' >
                                    <th className='teclas-pdv'>1</th>
                                    <th className='teclas-pdv'>2</th>
                                    <th className='teclas-pdv'>3</th>
                                </td>
                                <td className='teclado-pdv' >
                                    <th className='teclas-pdv' id='tecla-0-pdv'>0</th>
                                    <th className='teclas-pdv'>,</th>

                                </td>

                            </table>

                        </div>


                    </div>
                    <div>
                        <td className='div-sub-total-pdv'>
                            <p>Sub Total</p><input type="text" className='inp-sub-total-pdv' />
                        </td>
                    </div>

                    <div className="button-pdv">

                        <button className="btn-pdv"><h6>( F2 )</h6>Incluir Cliente</button>
                        <button className="btn-pdv"><h6>( F3 )</h6>Exclir Item</button>
                        <button className="btn-pdv"><h6>( F4 )</h6>Cancelar Venda</button>
                        <button className="btn-pdv"><h6>( F5 )</h6>Menu Auxiliar</button>
                        <button className="btn-pdv"><h6>( F6 )</h6>Desconto no Item</button>
                        <button className="btn-pdv"><h6>( F7 )</h6>Teclado / Imagem</button>
                        <button className="btn-pdv"><h6>( F8 )</h6>Fechar Venda</button>
                    </div>

                </div>
                <footer className="footer">
                    <p>www.alphatecsistemas.com.br</p>
                    <p>tel. 84 3316-1022</p>


                </footer>



            </div>
        </>
    )
}
export default Pdv