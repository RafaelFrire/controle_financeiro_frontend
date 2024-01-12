import React from 'react'
import axios from 'axios'
import { Finance } from '../interface/Finance'
import CardMensage from '../components/card-mensage/CardMensage'


function usePost() {
  const [message, setMessage] = React.useState<string | null>(null);

  const PostTransaction = async (data:Finance) =>
  {
    try{
      const BaseUrl = 'http://localhost:3000'
      axios.post(`${BaseUrl}/transactions`, data)
      setMessage('Registrado com sucesso!')
    }
    catch (err){
      console.log("MEU ERROR")
    }
    
  }
  
  const setMensage = () =>{
    return(message && <CardMensage mensage={message}/> )
  }

  return(
    {PostTransaction, setMensage}
  )
}



export default usePost