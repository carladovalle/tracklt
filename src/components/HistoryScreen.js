import React from 'react';
import styled from 'styled-components';

export default function Habits() {
    return (
        <HistoryScreen>
            <Subheading>
                <Title>Histórico</Title>
                <TitlePhrase>Em breve você poderá ver o histórico dos seus hábitos aqui!</TitlePhrase>
            </Subheading>
        </HistoryScreen>
    )
}

const HistoryScreen = styled.div`
    width: 375px;
    height: 527px;
    background-color: #F2F2F2;
    position: fixed;
    margin-top: 70px;
    font-family: 'Lexend Deca', sans-serif;
`
const Subheading = styled.div`
    margin-top: 28px;
    display: flex;
    margin-bottom: 22px;
    flex-direction: column;
    margin-left: 17px;
`
const Title = styled.div`
    color: #126BA5;
    font-size: 22.98px;
    font-weight: 400;
    margin-bottom: 17px;
`
const TitlePhrase = styled.div`
    color: #666666;
    font-size: 17.98px;
    font-weight: 400;
    margin-bottom: 28px;
`