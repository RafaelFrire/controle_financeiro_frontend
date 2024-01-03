import React from 'react';
import Modal from '../Modal/Modal'
import { BtnModal, BtnContainer } from './Button'


function Button(){
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };


  return (
    <>
    <BtnContainer>
        <BtnModal onClick={handleOpenModal}>Adicionar</BtnModal>
    </BtnContainer>
    {isModalOpen && <Modal status={isModalOpen} onClose={handleCloseModal}/>}
    </>
  )
}

export default Button