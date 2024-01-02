import React from 'react'
import './index.css'
import Button from '../Button/Button.tsx'

interface PropsModal{
    status: Boolean
}

function Modal(props:PropsModal) {

    const [modal, SetModal] = React.useState(props.status);



  return (
    <>
        {modal? <div className='setModal'>
        <div className='Modal-content'>
            <button id='close-modal' onClick={() => SetModal(false)}>X</button>
            <form method='post'>
                <div className='question'>
                <div><div><label htmlFor="text">descrição</label></div></div>
                <input type="text" />
                </div>
                <div className='question'>
                <div><label htmlFor="text">Valor</label></div>
                        <input type="text" />
                </div>
                <div className='question'>
                        <div><label htmlFor="text">Data</label></div>
                        <input type="text" />
                </div>
                <div className='question'>
                        <div><label htmlFor="text">Movimentação</label></div>
                        <input type="text" />
                </div>
                <div className='question'>
                        <div><label htmlFor="text">Recorrencia</label></div>
                        <input type="text" />
                </div>
                <div className='btn-modal'>
                    <Button />
                </div>
             
            </form>
    
        </div>
    </div> : ''}
    
    
    </>
    
  )
}

export default Modal