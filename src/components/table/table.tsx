import useFetch from '../../hooks/useFetch'
import { Finance } from '../../interface/Finance'
import './index.css'

function Table() {
    const data = useFetch().fetchData
 
  return (
    <table>
      <thead>
            <tr>
              <th style={{width: "550px"}}>descrição</th>
              <th>Data</th>
              <th style={{width: "150px"}}>Recorrencia</th>
              <th>tipo</th>
              <th>Valor</th>
           </tr>
      </thead>
      
      <tbody>
          {Array.isArray(data)?
           data.map((item:Finance) =>{
              return(
                <tr key={item.id}>
                  <td style={{textAlign:"left"}}>{item.descricao}</td>
                  <td>{item.data}</td>
                  <td>{item.recorrencia}</td>
                  <td >{item.transacao}</td>
                  <td>{item.valor}</td>
              </tr>
              )
           }):<h1>is not array</h1>}
      </tbody>
    </table>
  )
}

export default Table