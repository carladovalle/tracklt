import React from 'react';
import styled from 'styled-components';

import photo from "./../assets/image/Rectangle 14.png";

export default function Header() {
    return (
        <HeaderScreen>
            <h1>Tracklt</h1>
            <img src={photo} />
        </HeaderScreen>
    )
}

const HeaderScreen = styled.div`
    width: 375px;
    height: 70px;
    background-color: #126BA5;
    position: fixed;
    display: flex;
    align-items: center;
    top: 0;
    left: 0;

    h1 {
        color: #FFFFFF;
        font-size: 38.98px;
        font-weight: 400;
        margin-left: 18px;
        font-family: 'Playball', cursive;
    }

    img {
        width: 50px;
        height: 50px;
        border-radius: 98.5px;
        margin-left: 191px;
    }
`