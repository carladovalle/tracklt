import React from 'react';
import styled from 'styled-components';

import logo from "./../assets/image/logo.png";

export default function LoginScreen () {
    return (
            <ScreenLogin>
                <img src={logo} />
                <Input placeholder="email" />
                <Input placeholder="senha" />
                <Button>Entrar</Button>
                <GoToRegistration>Não tem uma conta? Cadastre-se!</GoToRegistration>
            </ScreenLogin>
    )
}

const ScreenLogin = styled.div`
    width: 375px;
    height: 667px;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    flex-direction: column;
    font-family: 'Lexend Deca', sans-serif;

    img {
        width: 180px;
        height: 178.38px;
        margin-top: 66px;
        margin-bottom: 26.62px;
    }
`
const Input = styled.input`
    width: 303px;
    height: 45px;
    margin-top: 6px;
    border-radius: 5px;
    border: 1px solid #D4D4D4;

    &::placeholder {
        color: #DBDBDB;
        font-size: 19.98px;
        font-weight: 400;
    }
`
const Button = styled.button`
    width: 303px;
    height: 45px;
    background-color: #52B6FF;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 6px;
    border: 1px solid #52B6FF;
    border-radius: 4.64px;
`
const GoToRegistration = styled.div`
    color: #52B6FF;
    font-size: 13.98px;
    font-weight: 400;
    margin-top: 25px;
`
