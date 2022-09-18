import React, { useEffect, useState } from "react";
import Routes from "./Routes";
import ThemeContext from "./Config/ThemeContext";
import NamesContext from "./Config/NamesContext";

const App = () => {

    const [Theme, setTheme] = useState('Light');

    const [PlayersNames, setPlayersNames] = useState({
        player1: '',
        player2: ''
    });

    const ToggleTheme = () => setTheme(Theme === 'Light' ? 'Dark' : 'Light')

    const ChangeNames = ({ player1, player2 }) => setPlayersNames({ player1, player2 })

    useEffect(() => {
        const ThemeSaved = localStorage.Theme
        if(ThemeSaved) setTheme(ThemeSaved)
    }, []);

    useEffect(() => {
        localStorage.setItem('Theme', Theme)
    }, [Theme]);

    return (
        <ThemeContext.Provider value={{ Theme, ToggleTheme }}>
            <NamesContext.Provider value={{ PlayersNames, ChangeNames }}>
                <Routes />
            </NamesContext.Provider>
        </ThemeContext.Provider>
    )
}

export default App;
