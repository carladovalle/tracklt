import React from 'react';
import styled from 'styled-components';

export default function Footer() {
    return (
        <FooterScreen>
            <Habits>Hábitos</Habits>
            <Today>Hoje</Today>
            <History>Histórico</History>
        </FooterScreen>
    )
}

const FooterScreen = styled.div`
    width: 375px;
    height: 70px;
    background-color: #FFFFFF;
    position: fixed;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-family: 'Lexend Deca', sans-serif;
`
const Habits = styled.div`
    color: #52B6FF;
    font-size: 17.98px;
    font-weight: 400;
`
const Today = styled.div`
    color: #52B6FF;
    font-size: 17.98px;
    font-weight: 400;
`
const History = styled.div`
    color: #52B6FF;
    font-size: 17.98px;
    font-weight: 400;
`