/* eslint-disable no-throw-literal */
import React, { useContext, useState } from 'react'
import { Tooltip } from '@material-ui/core';
import { Settings } from '@material-ui/icons';
import { ButtonConfig, Container, TitleTooltip } from '../Style/style';
import ThemeContext from '../Config/ThemeContext';
import FormChooseWords from '../Components/FormChooseWords';
import FormTestWords from '../Components/FormTestWords';
import ConfigMenu from '../Components/ConfigMenu';

const Home = () => {

    const { Theme } = useContext(ThemeContext)
    const [Testing, setTesting] = useState(false);
    const [ShowMenu, setShowMenu] = useState(false);

    return (
        <>
            <Container Theme={Theme}>
                <header>
                    <h1>
                        <img src={`img/Acha jogo LOGO${Theme === 'Dark' ? ' branco' : ''}.png`} alt="Acha palavra" />
                    </h1>
                    <Tooltip title={<TitleTooltip>{ ShowMenu ? 'Fechar' : 'Abrir'} definições</TitleTooltip>} arrow placement='bottom'>
                        <ButtonConfig variant='contained' endIcon={<Settings />} onClick={() => setShowMenu(!ShowMenu)} disableElevation>
                            Configurações
                        </ButtonConfig>
                    </Tooltip>
                </header>
                <section>
                    <FormChooseWords className={Testing ? 'hide' : ''} setTesting={setTesting} />
                    <FormTestWords className={Testing ? 'show' : ''} />
                </section>
            </Container>
            <ConfigMenu ShowMenu={ShowMenu} Theme={Theme} />
        </>
    )
}

export default Home