import './styles.css'
import '../../Navbar/styles.css'



const Pdv = () => {

    function collapse(){
        
       
    }

    collapse()

    return (

        <>
            <div className="pdv-main-container">
                <div className="pdv-main">
                    <div className="pdv-header">
                        <div id='pdv-header-line'>
                            <h1>Ethan Pdv</h1>
                        </div>

                        <div className="pdv-head-line1"  >
                            <div id='div-icon'>

                            </div>

                            <div className='pdv-operacao' >
                                <div id='div-tipo-op' ><button id='button-tipo-op'>Tipo de operação (F8)</button>
                                <a className="testeimprimir" href="http://localhost:3000/pdv" target="_blank">TESTE</a>

                                </div>

                                <div>
                                    <a href="">Caixa: 01</a>
                                    <a href="">Operador: Pedro</a>
                                    <a href="">Série: 1</a>
                                </div>

                            </div>

                        </div>

                        <div className="pdv-head-line2">
                            <p>#Caderno 12 Matérias</p>
                        </div>

                    </div>
                    <div className="pdv-body-container">
                        <div className="pdv-body-column1">
                            <input type="text" className='pdv-desc' />

                        </div>
                        <div className="pdv-body-colunm2">
                            <table className='pdv-main-product'>
                                <td><input type="text" className='pdv-inf-produc' /></td>
                                <td ><h6>Quantidade</h6><input type="text" className='pdv-inf-produc' /></td>
                                <td ><h6>Valor Unitário</h6><input type="text" className='pdv-inf-produc' /></td>
                                <td ><h6>Valor Total</h6><input type="text" className='pdv-inf-produc' /></td>
                                <td><h4>Sub Total</h4>
                                    <input type="text" className='pdv-inf-produc' id='inp-sub-total' />

                                </td>


                            </table>

                        </div>

                        <table className="pdv-body-column3">
                            <td className='padv-btn-nav'>
                                <button><h6>(F2)</h6> Incluir Cliente</button>
                            </td>
                            <td className='padv-btn-nav'>
                                <button><h6>(F3)</h6> Excluir Item</button>
                            </td>
                            <td className='padv-btn-nav'>
                                <button><h6>(F4)</h6> Cancelar Venda</button>
                            </td>
                            <td className='padv-btn-nav'>
                                <button ><h6>(F5)</h6> Menu Auxiiar</button>
                            </td>
                            <td className='padv-btn-nav'>
                                <button ><h6>(F6)</h6>Desconto Item</button>
                            </td>
                            <td className='padv-btn-nav'>
                                <button ><h6>(F7)</h6>Finalizar Venda</button>
                            </td>

                        </table>




                    </div>



                </div>

            </div>

        </>
    )
}

export default Pdv