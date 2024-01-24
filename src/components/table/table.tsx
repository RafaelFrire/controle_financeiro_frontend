import useFetch from '../../hooks/useFetch'
import useDelete from '../../hooks/useDelete'
import { Finance } from '../../interface/Finance'
import './index.css'


function Table() {
    const {fetchData} = useFetch();
    const {deleteTransaction, setMensagem} = useDelete()
 

    const handleClick = (dataDelete:Finance) =>{
      deleteTransaction(dataDelete)
    }
    
  return (
    <>
        {setMensagem()}
    <table>
      <thead>
            <tr>
              <th id='column-description'>descrição</th>
              <th>Data</th>
              <th id='column-category'>Categoria</th>
              <th>Tipo</th>
              <th>Valor</th>
              <th id='column-action'>Ação</th>
           </tr>
      </thead>
      
      <tbody className='card'>
          {Array.isArray(fetchData)?
           fetchData.map((item:Finance) =>{
              return(
                <tr key={item.id}>
                  <td data-title='descricao'>{item.descricao}</td>
                  <td data-title='data'>{item.data}</td>
                  <td data-title='categoria'>{item.categoria}</td>
                  <td data-title='transacao'>{item.transacao}</td>
                  <td data-title='valor'>{item.valor}</td>
                  <td data-title='ação' id='delete-icon' onClick={() => handleClick(item)}>X</td>
              </tr>
              )
           }):<h1>is not array</h1>}
      </tbody>
    </table>
  
    </>
  )
}

export default Table