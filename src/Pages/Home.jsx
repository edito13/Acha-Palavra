/* eslint-disable no-throw-literal */
import React, { useContext, useEffect, useState } from 'react'
import { Container } from '../Style/style';
import ThemeContext from '../Config/ThemeContext';
import ModalGetName from '../Components/ModalGetName'
import FormChooseWords from '../Components/FormChooseWords';
import FormTestWords from '../Components/FormTestWords';
import ThemeConfig from '../Components/ThemeConfig';

const Home = () => {

    const { Theme } = useContext(ThemeContext)
    const [Testing, setTesting] = useState(false);
    const [Open, setOpen] = useState(false);

    useEffect(() => {
        setTimeout(() => setOpen(false), 1300)
    }, []);

    const onClose = () => setOpen(false)  

    return (
        <Container Theme={Theme}>
            <header>
                <h1>
                    <img src={`img/Acha jogo LOGO${Theme === 'Dark' ? ' branco' : ''}.png`} alt="Acha palavra"/>
                </h1>
                <ThemeConfig />
            </header>
            <section>
                <FormChooseWords className={Testing ? 'hide' : ''} setTesting={setTesting}/>
                <FormTestWords className={Testing ? 'show' : ''}/>
            </section>
            { Open &&  <ModalGetName open={Open} onClose={onClose}/> }
        </Container>
    )
}

export default Home