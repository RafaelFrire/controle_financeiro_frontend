import { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import { Table } from './Table'
import { Finance } from '../../interface/Finance'

function table() {
    const data = useFetch().fetchData
    console.log(data)


  return (
    <Table>
        <tr>
            <th style={{width: "550px"}}>descrição</th>
            <th>Data</th>
            <th style={{width: "150px"}}>Recorrencia</th>
            <th>Valor</th>
        </tr>

        {Array.isArray(data)?
         data.map((item:Finance) =>{
            return(
                <tr>
                <td>{item.descricao}</td>
                <td>{item.data}</td>
                <td>{item.recorrencia}</td>
                <td>{item.valor}</td>
            </tr>
            )
         }):'is not a array'}
       
    </Table>
  )
}

export default table