import './styles.css';

const Contasreceber = () => {
    return (
        <>
            <div className='container-main'>
                <div className='rodateto'>Contas à Receber</div>
                <div className='nain-tela'>
                    <div className='tela-a'>
                        <table className='tabela-a'>
                            <h2>Recebimento de contas</h2>
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

export default Contasreceber