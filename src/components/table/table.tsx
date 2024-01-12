import useFetch from '../../hooks/useFetch'
import useDelete from '../../hooks/useDelete'
import { Finance } from '../../interface/Finance'
import './index.css'
import React from 'react'



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
              <th style={{width: "550px"}}>descrição</th>
              <th>Data</th>
              <th style={{width: "150px"}}>Categoria</th>
              <th>Tipo</th>
              <th>Valor</th>
              <th>Ação</th>
           </tr>
      </thead>
      
      <tbody>
          {Array.isArray(fetchData)?
           fetchData.map((item:Finance) =>{
              return(
                <tr key={item.id}>
                  <td style={{textAlign:"left"}}>{item.descricao}</td>
                  <td>{item.data}</td>
                  <td>{item.categoria}</td>
                  <td >{item.transacao}</td>
                  <td>{item.valor}</td>
                  <td id='delete-icon' onClick={() => handleClick(item)}>X</td>
              </tr>
              )
           }):<h1>is not array</h1>}
      </tbody>
    </table>
  
    </>
  )
}

export default Table