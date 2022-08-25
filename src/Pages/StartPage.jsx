import React,{ useContext, useEffect, useState } from 'react'
import ButtonPlay from '../Components/ButtonPlay'
import ThemeContext from '../Config/ThemeContext'
import { ContainerStart } from '../Style/StartPageStyle'

const Home = () => {

    const { Theme } = useContext(ThemeContext)

    const [Loading, setLoading] = useState(false);
    const [Play, setPlay] = useState(false);
    const [Temporizer, setTemporizer] = useState(0);

    useEffect(() => {
        const Interval = setInterval(() => {
            if(Temporizer > 2){
                clearInterval(Interval)
                setLoading(true)
                setTimeout(() => {
                    setLoading(false)
                    setPlay(true)
                }, 7000)
            }else setTemporizer(temp => temp + 1)
        }, 1000)

        return () => clearInterval(Interval)
    }, [Temporizer]);
    
    return (
        <ContainerStart Theme={Theme}>
            {
                Theme === 'Dark' ? <img src="img/Acha jogo LOGO branco.png" alt="Acha palavra" /> : <img src="img/Acha jogo LOGO.png" alt="Acha palavra" />
            }
            { Loading && <p>Loading <span>...</span></p> }
            { Play && <ButtonPlay />}
        </ContainerStart> 
    )
}

export default Home