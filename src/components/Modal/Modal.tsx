import './index.css'

interface PropsModal{
    status: Boolean,
    onClose: any
}
function Modal(props:PropsModal) {
    const handleCloseModal = () =>{
        if(props.onClose){
            props.onClose()
        }
    }
     

    const handleSubmit = (props:Event) =>{
        props.preventDefault();
        console.log("CLICOU");

    }
  return (
    <>
        {props.status ?  <div className='setModal'>

        <div className="modal">

        
        <div className='Modal-content'>
        <div className='btn-closeModal'>
                <button id='close-modal' onClick={handleCloseModal}>X</button>
            </div>

            <h1>Nova transação</h1>
            <form method='submit'>
                <div className='question'>
                <div>
                    <div>
                        <label htmlFor="text">descrição</label>
                    </div>
                </div>
                <input type="text" />
                </div>
                <div className='question'>
                <div>
                    <label htmlFor="text">Valor</label>
                </div>
                    <input type="number" />
                </div>
                <div className='question'>
                        <div><label htmlFor="text">Data</label></div>
                        <input type="date" />
                </div>
                <div className='question'>
                        <div><label htmlFor="text">Movimentação</label></div>
                        <select name="" id="">
                            <option value="">Entrada</option>
                            <option value="">Saida</option>
                       
                        </select>
                </div>
                <div className='question'>
                        <div><label htmlFor="text">Recorrencia</label></div>
                        <select name="" id="">
                            <option value="">Semanal</option>
                            <option value="">Mensal</option>
                            <option value="">Semestral</option>
                            <option value="">Anual</option>
                        </select>
                </div>
                <div className='btn-modal'>
                    <div className="btn-container">
                        <button onClick={handleSubmit}>Registrar</button>
                    </div>
                    
                </div>
             
            </form>
    
        </div>
        </div>
    </div> : ''}
    
    </>
    
  )}


export default Modal