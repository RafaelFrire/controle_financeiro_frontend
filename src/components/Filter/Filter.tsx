import React from 'react'
import { MainContainer, ContainerInputs, ContainerLabel, Input, Label } from '../Search/Search'
import './index.css'

function Filter() {
  return (

    <MainContainer>
      <ContainerLabel>
      <Label>Filtro</Label>
      </ContainerLabel>
    <ContainerInputs>
        <div className='input-about'>
        <Input type='text' placeholder='busca por descrição'/>
        </div>
        <div className='inputs-max-min'>
          <Input type='number' style={{width: "100px"}} placeholder='min'/>
          <Input type='number' style={{width: "100px"}} placeholder='max'/>
        </div>
    </ContainerInputs>
    </MainContainer>
  
  )
}

export default Filter