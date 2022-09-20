import './styles.css';
import { ReactComponent as Includ } from './img/plus.svg';
import { ReactComponent as Excluir } from './img/trash.svg';
import { ReactComponent as Pesquisa } from './img/search.svg';
import { ReactComponent as Editar } from './img/pencil-square.svg';
import { ReactComponent as Gravar } from './img/check.svg';
import { ReactComponent as Imprimir } from './img/printer.svg';

const CRUD_client = () => {
    return (
        <>
            <div className="client-container">
                <div className='main-container'>
                    <div className='menu-header-crud'>
                    </div>
                    <div className="client-tela-main">
                        <div className="client-crud-container">
                            <div className="client-crud">
                                <a href=""><Includ />Novo</a>
                            </div>
                            <div className="client-crud">
                                <a href=""><Editar />Editar</a>
                            </div>
                            <div className="client-crud">
                                <a href=""> <Gravar />Gravar</a>
                            </div>
                            <div className="client-crud">
                                <a href=""><Excluir />Excluir</a>
                            </div>
                            <div className="client-crud">
                                <a href=""><Imprimir />Imprimir</a>
                            </div>
                            <div className="client-crud">
                                <a href=""> <Pesquisa />Pequisar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CRUD_client