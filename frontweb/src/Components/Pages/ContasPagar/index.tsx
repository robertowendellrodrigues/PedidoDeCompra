import './styles.css';

const Contaspagar = () => {
    return (
        <>
            <div className='container-main'>
                <div className='rodateto'>Contas a Pagar</div>
                <div className='nain-tela'>
                    <div className='tela-a'>
                        <table className='tabela-a'>
                            
                            <div>
                            <h2>Pagamento de contas</h2>

                            </div>
                            
                        </table>
                    </div>

                    <div className='tela-b'>

                        <div className='tabela-b'>
                            <div className='botao-menu'>
                                <button className='bnt-tabs-client' >Geral</button>
                                <button className='bnt-tabs-client'>Contas</button>
                                <button className='bnt-tabs-client'>Revenda</button>
                            </div>
                          
                            
                            <div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </>

    );
}

export default Contaspagar