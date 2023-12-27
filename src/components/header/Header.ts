import Styled from 'styled-components'

export const Container = Styled.header`
    max-width: 100vw;
    height: 15vh;
    background-color: #5F5CF3;
    display: flex;
    align-items: center;
    text-align: center;

`

export const Title = Styled.h1`
    font-size: 2.9em;
    font-family: Arial;
    color: white;
    margin: 0 auto;


    @media(max-width: 320px){
        font-size: 2.2em;
    }

`
