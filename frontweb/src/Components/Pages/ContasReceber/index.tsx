import './styles.css';
import CRUD_client from '../../CRUD_client';

const Contasreceber = () => {
    return (
        <>
            <div className='container-main-glob'>
                <CRUD_client/>
                <div className='rodateto-pagina-glob'>Contas à Receber</div>
                <div className='nain-tela-glob'>
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