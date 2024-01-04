import './index.css'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Finance } from '../../interface/Finance'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup' 


interface PropsModal{
    status: Boolean,
    onClose: any
}


const schema = Yup.object().shape({
    descricao: Yup.string().required("Campo obrigatório!"),
    data: Yup.date()
    .required("Campo obrigatório!")
    .transform((originalValue, originalObject) => {
      // If the original value is an empty string, consider it as undefined
      return originalValue === "" ? undefined : originalValue;
    }).typeError("A data deve ser do tipo 'data'"),
    transacao: Yup.string().required("Campo obrigatório!"),
    recorrencia: Yup.string().required("Campo obrigatório!"),
    valor: Yup.number().required("Campo Obrigatório!").min(0, "apenas números positivos").typeError("o Valor deve ser do tipo 'Número'")
})

function Modal(props:PropsModal) {
    const handleCloseModal = () =>{
        if(props.onClose){
            props.onClose()
        }
    }
     
    const { register, handleSubmit, formState} =useForm({
        mode: 'all',
        resolver: yupResolver(schema)

    })
       
    const { errors, isSubmitting } = formState;

    console.log("erros", errors)


    const handleSubmitData = (data:Finance) =>{
        console.log("meus dados", data)
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
            <form onSubmit={handleSubmit(handleSubmitData)}>
                <div className='question'>
                <div>
                    <div>
                        <label htmlFor="text">descrição</label>
                    </div>
                </div>
                <input type="text" {...register("descricao")}/>
                {errors.descricao && (<p id='MsgError'>{errors.descricao.message}</p>)}
                </div>
                <div className='question'>
                <div>
                    <label htmlFor="text">Valor</label>
                </div>
                    <input type="number" {...register("valor")} />
                    {errors.valor && (<p id='MsgError'>{errors.valor.message}</p>)}
                  
                </div>
                <div className='question'>
                        <div><label htmlFor="text">Data</label></div>
                        <input type="date" {...register("data")}/>
                        {errors.data && (<p id='MsgError'>{errors.data.message}</p>)}
                </div>
                <div className='question'>
                        <div><label htmlFor="text">Tipo de Transação</label></div>
                        <select defaultValue="padrao" {...register("transacao")}>
                            <option value="padrao" disabled={true}>escolha uma opção...</option>
                            <option value="Entrada">Entrada</option>
                            <option value="Saida">Saida</option>
                        </select>
                        {errors.transacao && (<p id='MsgError'>{errors.transacao.message}</p>)}
                </div>
                <div className='question'>
                        <div><label htmlFor="text">Recorrencia</label></div>
                        <select defaultValue="padrao" {...register("recorrencia")}>
                            <option value="padrao" disabled={true}>Escolha uma opção...</option>
                            <option value="Semanal">Semanal</option>
                            <option value="Semanal">Mensal</option>
                            <option value="Semestral">Semestral</option>
                            <option value="Anual">Anual</option>
                        </select>
                        {errors.recorrencia && (<p id='MsgError'>{errors.recorrencia.message}</p>)}
                </div>
                <div className='btn-modal'>
                    <div className="btn-container">
                        <button type='submit'>Registrar</button>
                    </div>
                    
                </div>
             
            </form>
    
        </div>
        </div>
    </div> : ''}
    
    </>
    
  )}


export default Modal