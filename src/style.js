import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-image: url(./images/backgroundDesktop.svg);
        background-repeat: repeat-x;
        background-color: #00583C;
        font-family: 'Roboto', sans-serif;
    }
    
`

export const SectionFormulario = styled.section`
    width: 150vh;
    height: 95vh;
    background-color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
` 

export const Titulo = styled.h1`
    text-align: center;
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 15px;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Input = styled.input`
    width: 350px;
    height: 50px;
    margin: 5px;
    border: none;
    border-radius: 50px;
    padding-left: 20px;
    background-color: #F4F4F4;
    font-size: 15px;
    font-weight: 700;
    outline: none;
`

export const Span = styled.span`
    width: 200px;
    height: 1px;
    margin: 10px;
    background-color: rgba(85, 85, 85, 0.267);
`

export const Button = styled.button`
    width: 350px;
    height: 50px;
    margin: 20px;
    border-radius: 50px;
    font-weight: 700;
    font-size: 17px;
    cursor: pointer;
`

export const ButtonEntrar = styled(Button)`
    background-color: #04943c;
    color: #F4F4F4;
    border: none;
`

export const ButtonCadastrar = styled(Button)`
    background-color: #FFFFFF;
    border: 1px solid rgba(85, 85, 85, 0.267);
    color: #04943c;
`