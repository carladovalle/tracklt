import React from 'react';
import styled from 'styled-components';

export default function Habits() {
    return (
        <HabitsScreen>
            <Subheading>
                <Title>Meus hábitos</Title>
                <Add>+</Add>
            </Subheading>
            <NewHabit>
                <Input placeholder="nome" />
                <Weekdays>
                    <Day>D</Day>
                    <Day>S</Day>
                    <Day>T</Day>
                    <Day>Q</Day>
                    <Day>Q</Day>
                    <Day>S</Day>
                    <Day>S</Day>
                </Weekdays>
                <Options>
                    <Cancel>Cancelar</Cancel>
                    <Save>Salvar</Save>
                </Options>
            </NewHabit>
            <Phrase>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
            </Phrase>
        </HabitsScreen>
    )
}

const HabitsScreen = styled.div`
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
    align-items: center;
    margin-bottom: 22px;
`
const Title = styled.div`
    color: #126BA5;
    font-size: 22.98px;
    font-weight: 400;
    margin-left: 17px;
`
const Add = styled.div`
    background-color: #52B6FF;
    width: 40px;
    height: 35px;
    border-radius: 4.64px;
    margin-left: 145px;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 26.98px;
    font-weight: 400;
`
const Phrase = styled.div`
    color: #666666;
    font-size: 17.98px;
    font-weight: 400;
    margin-left: 17px;
    margin-right: 20px;
    line-height: 22px;
`
const NewHabit = styled.div`
    background-color: #FFFFFF;
    width: 340px;
    height: 180px;
    margin-bottom: 29px;
    border-radius: 5px;
    margin-left: 17px;
`
const Input = styled.input`
    width: 303px;
    height: 45px;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    margin-top: 18px;
    margin-bottom: 8px;
    margin-left: 19px;

    &::placeholder {
        color: #DBDBDB;
        font-weight: 400;
        font-size: 19.98px;
    }
`
const Weekdays = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 19px;
`
const Day = styled.div`
    width: 30px;
    height: 30px;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    color: #DBDBDB;
    font-size: 19.98px;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 4px;
`
const Options = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 29px;
`
const Cancel = styled.div`
    font-size: 15.98px;
    color: #52B6FF;
    font-weight: 400;
    margin-left: 148px;
`
const Save = styled.div`
    width: 84px;
    height: 35px;
    margin-left: 23px;
    background-color: #52B6FF;
    border-radius: 4.64px;
    color: #FFFFFF;
    font-weight: 400;
    font-size: 15.98px;
    display: flex;
    align-items: center;
    justify-content: center;
`