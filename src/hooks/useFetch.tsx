import React, { useEffect } from 'react'
import { Finance } from '../interface/Finance'
import axios from 'axios'

function useFetch() {
 const [fetchData, setFetchData] = React.useState([]);

 useEffect(() =>{
    const fetchData = async () =>{
        const responseFetch = await axios.get('http://localhost:3000/transactions')
        const data = await responseFetch.data
        setFetchData(data)
    }
    fetchData()
 },[])



  return ({fetchData})
}

export default useFetch