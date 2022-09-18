import React, { useEffect } from 'react'
import { ContainerModalResults, Modal } from '../../Style/style'

const ModalShowResults = ({ Status, open, onClose }) => {

    return (
        <Modal open={open} onClose={onClose}>
            <ContainerModalResults>
                <h1>Modal Show Results</h1>
                <p>{ Status.GameResult }</p>
            </ContainerModalResults>
        </Modal>
    )
}

export default ModalShowResults