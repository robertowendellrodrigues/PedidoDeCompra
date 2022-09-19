import './styles.css';
import { ReactComponent as Includ } from './img/plus.svg';
import { ReactComponent as Excluir } from './img/trash.svg';
import { ReactComponent as Pesquisa } from './img/search.svg';
import { ReactComponent as Editar } from './img/pencil-square.svg';
import { ReactComponent as Gravar } from './img/check.svg';
import { ReactComponent as Imprimir } from './img/printer.svg';


const Client = () => {
    return (

        <>
            <div className="client-container">

                <div className='client-header '>
                    <h6> Cliente</h6>
                </div>
                <div className='menu-header '>
                    <h6> Cliente</h6>
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
                    <table className="table table-striped table-sm client-inf">
          <thead>
            <tr>
              <th scope="col">Código</th>
              <th scope="col">Razão Social</th>
              <th scope="col">Nome fantasia</th>
              <th scope="col">Endereço</th>
              <th scope="col">Telefone</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1,001</td>
              <td>random</td>
              <td>data</td>
              <td>placeholder</td>
              <td>text</td>
            </tr>
            <tr>
              <td>1,002</td>
              <td>placeholder</td>
              <td>irrelevant</td>
              <td>visual</td>
              <td>layout</td>
            </tr>
            <tr>
              <td>1,003</td>
              <td>data</td>
              <td>rich</td>
              <td>dashboard</td>
              <td>tabular</td>
            </tr>
            <tr>
              <td>1,003</td>
              <td>information</td>
              <td>placeholder</td>
              <td>illustrative</td>
              <td>data</td>
            </tr>
            <tr>
              <td>1,004</td>
              <td>text</td>
              <td>random</td>
              <td>layout</td>
              <td>dashboard</td>
            </tr>
            <tr>
              <td>1,005</td>
              <td>dashboard</td>
              <td>irrelevant</td>
              <td>text</td>
              <td>placeholder</td>
            </tr>
            <tr>
              <td>1,006</td>
              <td>dashboard</td>
              <td>illustrative</td>
              <td>rich</td>
              <td>data</td>
            </tr>
            <tr>
              <td>1,007</td>
              <td>placeholder</td>
              <td>tabular</td>
              <td>information</td>
              <td>irrelevant</td>
            </tr>
            <tr>
              <td>1,008</td>
              <td>random</td>
              <td>data</td>
              <td>placeholder</td>
              <td>text</td>
            </tr>
            <tr>
              <td>1,009</td>
              <td>placeholder</td>
              <td>irrelevant</td>
              <td>visual</td>
              <td>layout</td>
            </tr>
            <tr>
              <td>1,010</td>
              <td>data</td>
              <td>rich</td>
              <td>dashboard</td>
              <td>tabular</td>
            </tr>
            <tr>
              <td>1,011</td>
              <td>information</td>
              <td>placeholder</td>
              <td>illustrative</td>
              <td>data</td>
            </tr>
            <tr>
              <td>1,012</td>
              <td>text</td>
              <td>placeholder</td>
              <td>layout</td>
              <td>dashboard</td>
            </tr>
            <tr>
              <td>1,013</td>
              <td>dashboard</td>
              <td>irrelevant</td>
              <td>text</td>
              <td>visual</td>
            </tr>
            <tr>
              <td>1,014</td>
              <td>dashboard</td>
              <td>illustrative</td>
              <td>rich</td>
              <td>data</td>
            </tr>
            <tr>
              <td>1,015</td>
              <td>random</td>
              <td>tabular</td>
              <td>information</td>
              <td>text</td>
            </tr>
          </tbody>
        </table>






                    
                </div>
                

            </div>

        </>

    ); 
}
 
export default Client