import React, { useEffect, useState } from "react";
import Routes from "./Routes";
import ThemeContext from "./Config/ThemeContext";

const App = () => {

    const [Theme, setTheme] = useState('Light');

    const ToggleTheme = () => {
        setTheme(Theme === 'Light' ? 'Dark' : 'Light')
    }

    useEffect(() => {
        const ThemeSaved = localStorage.Theme

        if(ThemeSaved) setTheme(ThemeSaved)
    }, []);

    useEffect(() => {
        localStorage.setItem('Theme', Theme)
    }, [Theme]);

    return (
        <ThemeContext.Provider value={{ Theme, ToggleTheme }}>
            <Routes />
        </ThemeContext.Provider>
    )
}

export default App;
