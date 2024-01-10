import React from 'react'
import axios from 'axios' 
import { Finance } from '../interface/Finance'


function useDelete(data:Finance) {
    const URL = "http://localhost:3000/transactions"
    const ID = data.id
    axios.delete(`${URL}/${ID}`)
    document.location.reload()

    //  window.location.reload()

  return (
    {}
  )
}

export default useDelete