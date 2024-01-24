import './index.css'
import { useForm } from 'react-hook-form'
import { Finance } from '../../interface/Finance'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup' 
import usePost from '../../hooks/usePost'
import InputMask from 'react-input-mask' 


interface PropsModal{
    status: Boolean,
    onClose: any
}
const schema = Yup.object().shape({
    descricao: Yup.string().required("Campo Obrigatório!").max(50, 'È permitido apenas 50 caracteres'),
    data: Yup.string().required('Campo Obrigatório!').typeError("data invalida"),
    transacao: Yup.string().required("Campo Obrigatório!"),
    categoria: Yup.string().required("Campo Obrigatório!"),
    valor: Yup.number().positive("o valor precisa ser positivo").moreThan(0).required("Campo Obrigatório!").typeError("Número invalido")
})

function Modal(props:PropsModal) {

    const {PostTransaction, setMensage} = usePost();


    const handleCloseModal = () =>{
        if(props.onClose){
            setTimeout(() =>{
                props.onClose()
                window.location.reload()
            }, 700)
        }
    }

    const { register, handleSubmit, formState} =useForm({
        mode: 'all',
        resolver: yupResolver(schema)

    })
    const { errors } = formState;

    const handleSubmitData = (formData:Finance) =>{
        try{
            PostTransaction(formData);
            handleCloseModal()
        }
        catch (err){
            console.error(err)
        }
      
    }

  return (
    <>
  

        {props.status ?  <div className='setModal'>
        {setMensage()}
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
        
                        <InputMask mask="99/99/9999" {...register("data")}/>
                        {errors.data && (<p id='MsgError'>{errors.data.message}</p>)}
                </div>
                <div className='question'>
                        <div><label htmlFor="text">Tipo de Transação</label></div>
                        <select defaultValue="entrada" {...register("transacao")}>
                            <option value="entrada" disabled={true}>escolha uma opção...</option>
                            <option value="entrada">Entrada</option>
                            <option value="saida">Saida</option>
                        </select>
                        {errors.transacao && (<p id='MsgError'>{errors.transacao.message}</p>)}
                </div>
                <div className='question'>
                        <div><label htmlFor="text">categoria</label></div>
                        <select defaultValue="outros" {...register("categoria")}>
                            <option value="outros" disabled={true}>Escolha uma opção...</option>
                            <option value="alimentacao">Alimentação</option>
                            <option value="moradia">Moradia</option>
                            <option value="lazer">Lazer</option>
                            <option value="estudos">Estudos</option>
                            <option value="transporte">Transporte</option>
                            <option value="viagens">Viagens</option>
                            <option value="salario">Salário</option>
                            <option value="outros">Outros...</option>
                        </select>
                        {errors.categoria && (<p id='MsgError'>{errors.categoria.message}</p>)}
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