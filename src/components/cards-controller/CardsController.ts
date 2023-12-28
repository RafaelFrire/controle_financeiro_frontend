import Styled from 'styled-components'


export const CardController = Styled.div`
    max-width: 300px;
    height: 140px;
    font-family: Arial;
    border-radius: 15px;
    background-color: #75B683;
    text-align: center;
    h1{
        padding-top: 10px;
    }

    @media (max-width: 420px){
        display: flex;
        flex-direction: column;
        margin:0 auto;
        width: 250px;
    }
`

export const TextValue = Styled.h2`
    font-size: 2rem;
    padding: 20px 0;

    @media (max-width: 320px){
        font-size: 1.7rem;
        
    }

`
