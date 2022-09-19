import './styles.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Iconuser } from './img/person.svg'
import { ReactComponent as Iconprovider } from './img/building.svg'
import { ReactComponent as Iconreport } from './img/list-task.svg'
import { ReactComponent as Iconsearch } from './img/search.svg'
import { ReactComponent as Iconlist } from './img/cart4.svg'

const Navicon = () => {
    return (
        <>
            <div className="navicon-container" id='naviconId'>
                <div className='icons'>

                    <div className='icon'>
                        <a className='icon'><Iconprovider />Fornecedor</a>
                    </div>
                    <div className='icon'>
                        <a className='icon'><Iconuser />Usuário</a>
                    </div>
                    <div className='icon'>
                        <a className='icon'><Iconlist />Pedido</a>
                    </div>
                    <div className='icon'>
                        <a className='icon'><Iconsearch />Pesquisa</a>
                    </div>
                    <div className='icon'>
                        <a className='icon'><Iconreport />Relatório</a>
                    </div>
                    <div className='icon'>

                    </div>

                </div>
            </div>

        </>
    );
}

export default Navicon;