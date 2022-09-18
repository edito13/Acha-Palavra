/* eslint-disable no-throw-literal */
import React, { useState, useContext } from 'react'
import { FormWords, StartGameButton } from '../Style/style'
import NamesContext from '../Config/NamesContext';
import ThemeContext from '../Config/ThemeContext';

const FormChooseWords = props => {
    
    const { PlayersNames } = useContext(NamesContext)

    const { Theme } = useContext(ThemeContext)
 
    const [PlayersWords, setPlayersWords] = useState({
        PlayerWord1: '',
        PlayerWord2: ''
    });

    const handleChange = e => {
        const { name, value } = e.target
        setPlayersWords({...PlayersWords, [name]: value})
    }

    const SavedWords = e => {
        e.preventDefault()

        try {
            if(PlayersWords.PlayerWord1 === '' || PlayersWords.PlayerWord2 === '') throw 'Nenhum dos campos pode ficar vazio!'
            // If the words contains some number it returns a throw
            else if((/\d/g).test(PlayersWords.PlayerWord1) || (/\d/g).test(PlayersWords.PlayerWord1)) throw 'As palavras não podem conter números!'
            else if(PlayersWords.PlayerWord1.length < 5 || PlayersWords.PlayerWord2.length < 5) throw 'As palavras tem que ter 5 caracteres'

            localStorage.setItem('WordsPlayer', JSON.stringify({
                WordPlayer1: PlayersWords.PlayerWord1, 
                WordPlayer2: PlayersWords.PlayerWord2 
            }))
            props.setTesting(true)

        } catch (error) {
            alert('Erro: '+error)
        }
    }
    
    return (
        <FormWords {...props} onSubmit={SavedWords}>
            <div>
                <label htmlFor="word1">Palavra de { PlayersNames.player1 ? PlayersNames.player1 : 'Jogador 1' }</label>
                <input type="password" name='PlayerWord1' value={PlayersWords.PlayerWord1} id='word1' maxLength={5} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="word2">Palavra de { PlayersNames.player2 ? PlayersNames.player2 : 'Jogador 2' }</label>
                <input type="password" name='PlayerWord2' value={PlayersWords.PlayerWord2} id='word2' maxLength={5} onChange={handleChange}/>
            </div>
            <div>
                <StartGameButton theme={Theme} variant='contained' type='submit' disableElevation>Start Game</StartGameButton>
            </div>
        </FormWords>
    )
}

export default FormChooseWords