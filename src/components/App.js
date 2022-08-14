import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginScreen from './LoginScreen';
import RegistrationScreen from './RegistrationScreen';
import Header from './Header';
import HabitsScreen from './HabitsScreen';
import Footer from './Footer';
import TodayScreen from './TodayScreen';
import HistoryScreen from './HistoryScreen';

export default function App() {

    const [token, setToken] = React.useState("");

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginScreen setToken={setToken} />} />
                <Route path="/cadastro" element={<RegistrationScreen />} />
                <Route path="/hoje" element={<TodayScreen token={token} />} />
            </Routes>
        </BrowserRouter>
    )
}