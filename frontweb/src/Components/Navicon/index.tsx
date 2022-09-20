import './styles.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Iconuser } from './img/person.svg'
import { ReactComponent as Iconprovider } from './img/building.svg'
import { ReactComponent as Iconnfe } from './img/nfe.svg'
import { ReactComponent as Iconconfig } from './img/gear.svg'
import { ReactComponent as Iconlist } from './img/cart4.svg'
import {ReactComponent as Iconestoque} from './img/boxes.svg'
import {ReactComponent as Iconreceber} from './img/arrow-down.svg'
import {ReactComponent as Iconpagar} from './img/arrow-up.svg'
import {ReactComponent as IconCaixa} from './img/coin.svg'
import {ReactComponent as Iconbanco} from './img/bank.svg'
import {ReactComponent as Iconpdv} from './img/shop.svg'

const Navicon = () => {
    return (
        <>
            <div className="navicon-container" id='naviconId'>
                <div className='icons'>

                <div className='icon'>
                        <a className='icon'><Iconuser />Cliente</a>
                    </div>
                    <div className='icon'>
                        <a className='icon'><Iconestoque />Estoque</a>
                    </div>
                    <div className='icon'>
                        <a className='icon'><Iconprovider />Fornecedor</a>
                    </div>
                    <div className='icon'>
                        <a className='icon'><Iconreceber />Receber</a>
                    </div>
                    <div className='icon'>
                        <a className='icon'><Iconpagar />Pagar</a>
                    </div>
                    <div className='icon'>
                        <a className='icon'><IconCaixa />Caixa</a>
                    </div>
                    <div className='icon'>
                        <a className='icon'><Iconbanco />Banco</a>
                    </div>
                    <div className='icon'>
                        <a className='icon'><Iconnfe />NF-e</a>
                    </div>
                   
                    <div className='icon'>
                        <a className='icon'><Iconlist />Compras</a>
                    </div>
                    <div className='icon'>
                        <a className='icon'><Iconpdv />PDV</a>
                    </div>
                    <div className='icon'>
                        <a className='icon'><Iconconfig />Configuração</a>
                    </div>
                    
                    <div className='icon'>

                    </div>

                </div>
            </div>

        </>
    );
}

export default Navicon;