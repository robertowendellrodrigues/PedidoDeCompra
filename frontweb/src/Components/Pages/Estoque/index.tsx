import './styles.css';

const Estoque = () => {
    return (
        <>
            <div className='container-main'>
                <div className='rodateto'>Estoque</div>
                <div className='nain-tela'>
                    <div className='tela-a'>
                        <table className='tabela-a'>
                            <h2>Estoque de produtos</h2>
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

export default Estoque