import './styles.css';
import { ReactComponent as Iconuser } from './img/person.svg'
import { ReactComponent as Iconprovider } from './img/building.svg'
import { ReactComponent as Iconnfe } from './img/nfe.svg'
import { ReactComponent as Iconconfig } from './img/gear.svg'
import { ReactComponent as Iconlist } from './img/cart4.svg'
import { ReactComponent as Iconestoque } from './img/boxes.svg'
import { ReactComponent as Iconreceber } from './img/arrow-down.svg'
import { ReactComponent as Iconpagar } from './img/arrow-up.svg'
import { ReactComponent as IconCaixa } from './img/coin.svg'
import { ReactComponent as Iconbanco } from './img/bank.svg'
import { ReactComponent as Iconpdv } from './img/shop.svg'
import { Link } from 'react-router-dom';

const Navicon = () => {
    return (
        <>
            <div className="navicon-container" id='naviconId'>
                <div className='icons'>

                    <div className='icon'>
                        <Link className='icon' to={'cliente'}><Iconuser />Cliente</Link>
                    </div>
                    <div className='icon'>
                    <Link className='icon' to={'estoque'}><Iconestoque />Estoque</Link>
                       
                    </div>
                    <div className='icon'>
                    <Link className='icon' to={'fornecedor'}><Iconprovider />Fornecedor</Link>                    
                       
                    </div>
                    <div className='icon'>
                    <Link className='icon' to={'contasreceber'}><Iconreceber />Receber</Link>
                       
                    </div>
                    <div className='icon'>
                    <Link className='icon' to={'contaspagar'}><Iconpagar />Pagar</Link>
                      


                    </div>
                    <div className='icon'>
                    <Link className='icon' to={'caixa'}><IconCaixa />Caixa</Link>
                        <a className='icon'><IconCaixa />Caixa</a>
                    </div>
                    <div className='icon'>
                    <Link className='icon' to={'banco'}><Iconbanco />Banco</Link>
                        
                    </div>
                    <div className='icon'>
                    <Link className='icon' to={'nf-e'}><Iconnfe />NF-e</Link>
                        
                    </div>

                    <div className='icon'>
                    <Link className='icon' to={'compra'}><Iconlist />Compras</Link>
                        
                    </div>
                    <div className='icon'>
                    <Link className='icon' to={'pdv'}><Iconpdv />PDV</Link>
                       
                    </div>
                    <div className='icon'>
                    <Link className='icon' to={'fornecedor'}><Iconconfig />Configuração</Link>
                        
                    </div>

                   

                </div>

            </div>


        </>
    );
}

export default Navicon;