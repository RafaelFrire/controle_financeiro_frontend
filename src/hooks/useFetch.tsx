import React, { useEffect } from 'react'
import { Finance } from '../interface/Finance'
import axios from 'axios'

function useFetch() {
 const [fetchData, setFetchData] = React.useState<Finance[]>([]);

 const [sum, setSum] = React.useState<number>(0);
 const [sub, setSub] = React.useState<number>(0)
 const balance:any = (sum-sub).toFixed(2);

 const baseURL = 'https://controle-financeiro-backend-neon.vercel.app'

 useEffect(() =>{
    try {
        axios.get(`${baseURL}/transactions`).then((response) => {
          setFetchData(response.data);
        });
      } catch (err) {
        console.error(err);
      }
    }, []);

useEffect(()=>{
    const earnings = () =>{
        if(Array.isArray(fetchData)){
           fetchData.forEach((moviment:Finance) =>{
            const value = Number(moviment.valor)
                if(moviment.transacao === 'entrada'){
                    setSum((prevSum) => prevSum + value);
                }
                else if(moviment.transacao === 'saida'){
                    setSub((prevSub) => prevSub + value)
                }
           })
          
        }
        else{
            console.error("is not array")
        }
     }
     earnings()

 },[fetchData])

  return ({fetchData, sum, sub, balance})
}

export default useFetch