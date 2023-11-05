import React, { useContext, useEffect, useState } from 'react'
import ButtonPlay from '../Components/ButtonPlay'
import ModalGetName from '../Components/Modals/ModalGetName'
import ThemeContext from '../Config/ThemeContext'
import { ContainerStart } from '../Style/StartPageStyle'

const Home = () => {

    const { Theme } = useContext(ThemeContext)

    // First of all, We must delete the last words storage on the memory
    localStorage.removeItem('WordsPlayer')
    localStorage.removeItem('LettersFindedByPlayer1')
    localStorage.removeItem('LettersFindedByPlayer2')

    const [Loading, setLoading] = useState(true);
    const [Open, setOpen] = useState(false);

    useEffect(() => {
        setTimeout(() => setLoading(false), 4500)
    }, []);

    const onClose = () => setOpen(false)

    return (
        <ContainerStart Theme={Theme}>
            <img src={`img/Acha jogo LOGO${Theme === 'Dark' ? ' branco' : ''}.png`} alt="Acha palavra"/>
            {Loading && <p>Loading <span>...</span></p>}
            {!Loading && <ButtonPlay onClick={() => setOpen(true)}/>}
            {Open && <ModalGetName open={Open} onClose={onClose} />}
        </ContainerStart>
    )
}

export default Home