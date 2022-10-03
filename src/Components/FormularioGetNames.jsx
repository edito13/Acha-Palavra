/* eslint-disable no-throw-literal */
import React,{ useContext, useState } from 'react'
import { ButtonForm } from '../Style/style'
import NamesContext from '../Config/NamesContext';

const FormularioGetNames = ({ onClose }) => {

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
            
            // Next to get the field names, then it is closed
            ChangeNames(Fields)
            onClose()
        } catch (error) {
           //If there is any throw, then it'll be alerted here
            alert(error)
        }
    }

  return (
    <form onSubmit={SaveNames}>
        <div>
            <label htmlFor="player1">{ Fields.player1 ? Fields.player1 : 'Player 1' }</label>
            <input type="text" value={Fields.player1} name='player1'  id='player1' onChange={handleChange}/>
        </div>
        <div>
            <label htmlFor="player2">{ Fields.player2 ? Fields.player2 : 'Player 2' }</label>
            <input type="text" value={Fields.player2} name='player2'  id='player2' onChange={handleChange}/>
        </div>
        <div>
            <ButtonForm type='submit' variant='contained' disableElevation>Guardar nomes</ButtonForm>
        </div>
    </form>
  )
}

export default FormularioGetNames