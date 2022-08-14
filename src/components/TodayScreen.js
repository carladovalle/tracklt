import React from 'react';
import styled from 'styled-components';

import check from "./../assets/image/check.png";

export default function Today({token}) {

    console.log(token);

    return (
        <TodayScreen>
            <Subheading>
                <Title>Segunda, 17/05</Title>
                <TitlePhrase>Nenhum hábito concluído ainda</TitlePhrase>
            </Subheading>
            <Habit>
                <Texts>
                    <NameHabit>
                        Nome do hábito
                    </NameHabit>
                    <HabitInformation>
                        <Sequence>
                            Sequência atual: x dias
                        </Sequence>
                        <Record>
                            Seu recorde: x dias
                        </Record>
                    </HabitInformation>
                </Texts>
                <Check>
                    <img src={check} />
                </Check>
            </Habit>
        </TodayScreen>
    )
}

const TodayScreen = styled.div`
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
    margin-bottom: 5px;
`
const TitlePhrase = styled.div`
    color: #BABABA;
    font-size: 17.98px;
    font-weight: 400;
    margin-bottom: 28px;
`
const Habit = styled.div`
    width: 340px;
    height: 94px;
    background-color: #FFFFFF;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    margin-left: 18px;
`
const Texts = styled.div`
    margin-left: 15px;
    color: #666666;
    font-weight: 400;
    margin-top: 13px;
`
const NameHabit = styled.div`
    font-size: 19.98px;
    margin-bottom: 7px;
`
const HabitInformation = styled.div`
    font-size: 12.98px;
    display: flex;
    flex-direction: column;
`
const Sequence = styled.div`
    margin-bottom: 2px;
`
const Record = styled.div`

`
const Check = styled.div`
    width: 69px;
    height: 69px;
    margin-left: 80px;
    margin-top: 13px;
    background-color: #E7E7E7;
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`