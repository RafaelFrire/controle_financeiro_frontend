import './index.css'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Finance } from '../../interface/Finance'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup' 
import usePost from '../../hooks/usePost'
import CardMensage from '../card-mensage/CardMensage'
import React from 'react'

interface PropsModal{
    status: Boolean,
    onClose: any
}
const schema = Yup.object().shape({
    descricao: Yup.string().required("Campo obrigatório!"),
    data: Yup.string().max(6, 'dd/MM/yy ').required('A data é obrigatória.').typeError("data invalida"),
    transacao: Yup.string().required("Campo obrigatório!"),
    recorrencia: Yup.string().required("Campo obrigatório!"),
    valor: Yup.number().positive("o valor precisa ser positivo").moreThan(0).required("Campo Obrigatório!").typeError("Número invalido")
})

function Modal(props:PropsModal) {

const [mensage, setMensage] = React.useState(false)

    const handleCloseModal = () =>{
        if(props.onClose){
            
            setTimeout(() =>{
                props.onClose()
                window.location.reload()
            }, 1000)
           
        }
    }


    const { register, handleSubmit, formState} =useForm({
        mode: 'all',
        resolver: yupResolver(schema)

    })
    const { errors, isSubmitting } = formState;

    const handleSubmitData = (data:Finance) =>{
        try{
            usePost(data);
            setMensage(true)
            handleCloseModal()
            
           
        }
        catch (err){
            console.error(err)
        }
      
    }

  return (
    <>
  

        {props.status ?  <div className='setModal'>
        {mensage && <CardMensage mensage='Registrado com sucesso!'/>} 

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
                        <input type="text" {...register("data")}/>
                        {errors.data && (<p id='MsgError'>{errors.data.message}</p>)}
                </div>
                <div className='question'>
                        <div><label htmlFor="text">Tipo de Transação</label></div>
                        <select defaultValue="padrao" {...register("transacao")}>
                            <option value="padrao" disabled={true}>escolha uma opção...</option>
                            <option value="entrada">Entrada</option>
                            <option value="saida">Saida</option>
                        </select>
                        {errors.transacao && (<p id='MsgError'>{errors.transacao.message}</p>)}
                </div>
                <div className='question'>
                        <div><label htmlFor="text">Recorrencia</label></div>
                        <select defaultValue="padrao" {...register("recorrencia")}>
                            <option value="padrao" disabled={true}>Escolha uma opção...</option>
                            <option value="semanal">Semanal</option>
                            <option value="mensal">Mensal</option>
                            <option value="semestral">Semestral</option>
                            <option value="anual">Anual</option>
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