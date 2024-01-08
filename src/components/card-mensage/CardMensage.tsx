import React from 'react'
import './index.css'

interface CardProps{
  mensage: string
}


function CardMensage(props:CardProps) {
  return (
    <div className='container-msg'>
      <div className="pop-up">
          <p>{props.mensage}</p>
      </div>
    </div>
  )
}

export default CardMensage