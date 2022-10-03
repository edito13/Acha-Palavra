/* eslint-disable no-throw-literal */
import React from 'react'
import { ContainerModal, Modal } from '../../Style/style'
import FormularioGetNames from '../FormularioGetNames'

const ModalGetName = ({ open, onClose }) => {

    return (
        <Modal open={open}>
            <ContainerModal>
                <h3>Como os jogadores serão chamados?</h3>
                <FormularioGetNames onClose={onClose} />
            </ContainerModal>
        </Modal>
    )
}

export default ModalGetName