import styled from 'styled-components'


export const MainContainer = styled.div`
    display: column;
    justify-content: center;
    align-items: center;

    max-width: 1000px;
    min-height: 15vh;
    margin: 1em auto;

`

export const ContainerInputs = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;

    max-width: 900px;
    min-height: 10vh;
    background-color: #D9D9D9;
    margin: 0 auto;
`

export const ContainerLabel = styled.div`
    text-align: start;
    max-width: 900px;
    padding: 10px;
    margin: 0 auto;
`

export const Input = styled.input`  
    max-width: 400px;
    height: 45px;

`

export const Label = styled.label`
    color: black;
    font-size: 1.6rem;
  

    
`