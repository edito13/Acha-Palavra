import React, { useContext, useEffect, useState } from 'react'
import ButtonPlay from '../Components/ButtonPlay'
import ThemeContext from '../Config/ThemeContext'
import { ContainerStart } from '../Style/StartPageStyle'

const Home = () => {

    const { Theme } = useContext(ThemeContext)

    // First of all, We must delete the last words storage on the memory
    localStorage.removeItem('WordsPlayer')
    localStorage.removeItem('LettersFindedByPlayer1')
    localStorage.removeItem('LettersFindedByPlayer2')

    const [Loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 4500)
    }, []);
    return (
        <ContainerStart Theme={Theme}>
            <img src={`img/Acha jogo LOGO${Theme === 'Dark' ? ' branco' : ''}.png`} alt="Acha palavra"/>
            {Loading && <p>Loading <span>...</span></p>}
            {!Loading && <ButtonPlay />}
        </ContainerStart>
    )
}

export default Home