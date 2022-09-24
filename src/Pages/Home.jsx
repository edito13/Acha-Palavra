/* eslint-disable no-throw-literal */
import React, { useContext, useEffect, useState } from 'react'
import { ButtonConfig, Container, TitleTooltip } from '../Style/style';
import ThemeContext from '../Config/ThemeContext';
import FormChooseWords from '../Components/FormChooseWords';
import FormTestWords from '../Components/FormTestWords';
import ModalGetName from '../Components/Modals/ModalGetName';
import ConfigMenu from '../Components/ConfigMenu';
import { Button, IconButton, Tooltip } from '@material-ui/core';
import { Settings } from '@material-ui/icons';

const Home = () => {

    const { Theme } = useContext(ThemeContext)
    const [Testing, setTesting] = useState(false);
    const [Open, setOpen] = useState(false);
    const [ShowMenu, setShowMenu] = useState(false);

    useEffect(() => {
        setTimeout(() => setOpen(false), 1300)
    }, []);

    const onClose = () => setOpen(false)

    return (
        <>
            <Container Theme={Theme}>
                <header>
                    <h1>
                        <img src={`img/Acha jogo LOGO${Theme === 'Dark' ? ' branco' : ''}.png`} alt="Acha palavra" />
                    </h1>
                    <Tooltip title={<TitleTooltip>Aceder definições</TitleTooltip>} arrow placement='bottom'>
                        <ButtonConfig variant='contained' endIcon={<Settings />} onClick={() => setShowMenu(!ShowMenu)} disableElevation>
                            Configurações
                        </ButtonConfig>
                    </Tooltip>
                </header>
                <section>
                    <FormChooseWords className={Testing ? 'hide' : ''} setTesting={setTesting} />
                    <FormTestWords className={Testing ? 'show' : ''} />
                </section>

                {Open && <ModalGetName open={Open} onClose={onClose} />}
            </Container>
            <ConfigMenu ShowMenu={ShowMenu} Theme={Theme} />
        </>
    )
}

export default Home