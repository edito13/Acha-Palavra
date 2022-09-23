/* eslint-disable no-throw-literal */
import React,{ useContext, useState } from 'react'
import { ContainerModal, Modal } from '../../Style/style'
import FormularioGetNames from '../FormularioGetNames'
import NamesContext from '../../Config/NamesContext'

const ModalGetName = ({ open, onClose }) => {

    const { ChangeNames } = useContext(NamesContext)

    const [Fields, setFields] = useState({
        player1: '',
        player2: ''
    });

    const handleChange = e => {
        const { name, value } = e.target
        setFields({...Fields, [name]: value})
    }

    const SaveNames = e => {
        e.preventDefault()
        
        try {
            // If one of the fields is empity, then it'll return this throw
            if(Fields.player1 === '' || Fields.player2 === '') throw 'Há campos vazios, preencha-os'
            
            // If one of the fields include a number characater, then it'll return this throw
            else if((/\d+/.test(Fields.player1)) || (/\d+/.test(Fields.player2))) throw 'Os nomes não podem conter números'
            
            ChangeNames(Fields)

            onClose()

        } catch (error) {
           //If there is any throw, then it'll be alerted here
            alert(error)
        }
    }

    return (
        <Modal open={open}>
            <ContainerModal>
                <h3>Como os jogadores serão chamados?</h3>
                <FormularioGetNames Fields={Fields} handleChange={handleChange} SaveNames={SaveNames}/>
            </ContainerModal>
        </Modal>
    )
}

export default ModalGetName