import React from 'react'
import axios from 'axios'
import { Finance } from '../interface/Finance'
import CardMensage from '../components/card-mensage/CardMensage'


function usePost(data:Finance) {
  
  try{
    const BaseUrl = 'http://localhost:3000'
    axios.post(`${BaseUrl}/transactions`, data)
  }
  catch (err){
    console.log("MEU ERROR")
  }
   



}

export default usePost