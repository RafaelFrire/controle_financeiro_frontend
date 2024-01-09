import React from 'react'
import axios from 'axios' 
import { Finance } from '../interface/Finance'


function useDelete(data:Finance) {

    const URL = "localhost:3000"
    const ID = data.id
    axios.delete(`${URL}/transactions/${ID}`)

  return (
    {ID}
  )
}

export default useDelete