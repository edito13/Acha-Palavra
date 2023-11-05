import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Tooltip } from '@material-ui/core';
import { Autorenew, ExitToApp } from '@material-ui/icons';
import { ButtonRenew, ContainerModalResults, Modal, TitleTooltip } from '../../Style/style'

const ModalShowResults = ({ Status, open, onClose }) => {

    const navigate = useNavigate()

    const [Loading, setLoading] = useState(false);
    const [ShowButtons, setShowButtons] = useState(false);

    useEffect(() => {
        setTimeout(() => setLoading(false), 4000)
    }, [])

    useEffect(() => {
        setTimeout(() => setShowButtons(true), 4000)
    }, [])

    useEffect(() => {
        if (!Loading && Status.GameResult === 'Empate') setTimeout(() => window.location.reload(), 7000)
    }, [Loading, Status]);

    return (
        <Modal open={open} onClose={onClose}>
            <ContainerModalResults>
                {
                    Loading ? (
                        <div className='Loading'>
                            <img src="img/loading.svg" alt="Loading" />
                            <p>Analisando tudo...aguarde.</p>
                        </div>
                    ) :
                        (
                            <div className='Results'>
                                <img src={`img/${Status.GameResult === 'Empate' ? 'Group 98' : 'Asset 11@3x'}.png`} alt="resultado jogo" />
                                <h1>{Status.GameResult}</h1>
                                {
                                    ShowButtons && (
                                        <div className="buttons">
                                            <Tooltip title={<TitleTooltip>Reiniciar o jogo</TitleTooltip>} placement='bottom' arrow>
                                                <ButtonRenew onClick={() => navigate('/start')} startIcon={<Autorenew />} variant='contained' disableElevation>Reiniciar</ButtonRenew>
                                            </Tooltip>
                                            <Tooltip title={<TitleTooltip>Voltar à página inicial</TitleTooltip>} placement='bottom' arrow>
                                                <Button onClick={() => navigate('/')} startIcon={<ExitToApp />} variant='contained' disableElevation>Sair</Button>
                                            </Tooltip>
                                        </div>
                                    )
                                }
                            </div>
                        )
                }
            </ContainerModalResults>
        </Modal>
    )
}

export default ModalShowResults