import React, { useEffect } from 'react'
import axios from 'axios' 
import { Finance } from '../interface/Finance'
import CardMensage from '../components/card-mensage/CardMensage'


function useDelete() {
  const [message, setMessage] = React.useState<string | null>(null);

  const deleteTransaction = async (data: Finance) => {
    try {
      const URL = "http://localhost:3000/transactions";
      const ID = data.id;
      
       await axios.delete(`${URL}/${ID}`);
      setMessage("Item Excluido com sucesso!!")
      setTimeout(() => {
        setMessage(null);
        window.location.reload()
      }, 1000);
    } catch (error) {
      console.error("Erro ao excluir transação:", error);
    }
  };

  const setMensagem = () =>{
    return(message && <CardMensage mensage={message}></CardMensage>)
  }
  
    return (
      {deleteTransaction, setMensagem}

  )
}

export default useDelete