import React from 'react'
import { ButtonForm } from '../Style/style'

const FormularioGetNames = ({ Fields, handleChange, SaveNames }) => {
  return (
    <form onSubmit={SaveNames}>
        <div>
            <label htmlFor="player1">{ Fields.player1 ? Fields.player1 : 'Player1' }</label>
            <input type="text" value={Fields.player1} name='player1'  id='player1' onChange={handleChange}/>
        </div>
        <div>
            <label htmlFor="player2">{ Fields.player2 ? Fields.player2 : 'Player2' }</label>
            <input type="text" value={Fields.player2} name='player2'  id='player2' onChange={handleChange}/>
        </div>
        <div>
            <ButtonForm type='submit' variant='contained' disableElevation>Guardar nomes</ButtonForm>
        </div>
    </form>
  )
}

export default FormularioGetNames