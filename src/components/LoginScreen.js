import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

import logo from "./../assets/image/logo.png";

export default function LoginScreen ({setToken}) {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const navigate = useNavigate();

    function login(event) {

        event.preventDefault();

        const body = {
            email,
            password, 
        }

        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", body)
        
        promise
        .then(response => {
            console.log(response.data);
            setToken(response.data.token);
            navigate("/hoje");
        })    
        .catch(err => {
            console.log(err);
        })

    }

    return (
            <ScreenLogin>
                <img src={logo} />
                <form onSubmit={login}>
                    <Input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <Input type="password" placeholder="senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <Button type="submit">Entrar</Button>
                </form>
                <GoToRegistration>
                    <Link to="/cadastro">
                        Não tem uma conta? Cadastre-se!
                    </Link>
                </GoToRegistration>
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
    margin-left: 36px;

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
    margin-left: 36px;

    &:hover {
        cursor: pointer;
    }
`
const GoToRegistration = styled.div`
    color: #52B6FF;
    font-size: 13.98px;
    font-weight: 400;
    margin-top: 25px;

    a {
        color: #52B6FF;
    }
`
