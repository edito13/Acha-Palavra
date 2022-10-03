/* eslint-disable no-throw-literal */
import React, { useContext, useState } from 'react'
import NamesContext from '../Config/NamesContext';
import { FormTest } from '../Style/style';
import ModalShowResults from './Modals/ModalShowResults';
import ModalWordsTestResults from './Modals/ModalWordsTestResults';
import TestButton from './TestButton';

const FormTestWords = props => {

    const { PlayersNames } = useContext(NamesContext)

    const [PlayersTestWords, setPlayersTestWords] = useState({
        PlayerTestWord1: '',
        PlayerTestWord2: ''
    });
    const [StatusGame, setStatusGame] = useState({
        StatusResultPlayer1: '',
        StatusResultPlayer2: '',
        PlayerIsTesting: 'player1',
        GameResult: ''
    });

    const [OpenModalEnd, setOpenModalEnd] = useState(false);
    const [OpenModalTest, setOpenModalTest] = useState(false);

    const handleCloseModalTest = () => {
        setOpenModalTest(false)
        if (StatusGame.PlayerIsTesting === 'player1') setStatusGame({ ...StatusGame, PlayerIsTesting: 'player2' })
        else if (StatusGame.PlayerIsTesting === 'player2') {
            setOpenModalTest(false)
            setTimeout(() => setOpenModalEnd(true), 2000)
        }
    }

    const handleCloseModalEnd = () => {
        setOpenModalEnd(false)
    }

    const handleChange = e => {
        const { name, value } = e.target
        setPlayersTestWords({ ...PlayersTestWords, [name]: value })
    }

    const MakeWordsTest = id_player => {
        let { WordPlayer1, WordPlayer2 } = JSON.parse(localStorage.WordsPlayer)
        let { PlayerTestWord1, PlayerTestWord2 } = PlayersTestWords

        // The words has been being converted in Lowercase to compare themselves without any difficult.

        WordPlayer1 = WordPlayer1.toLowerCase()
        WordPlayer2 = WordPlayer2.toLowerCase()
        PlayerTestWord1 = PlayerTestWord1.toLowerCase()
        PlayerTestWord2 = PlayerTestWord2.toLowerCase()

        if (id_player === 1) {
            // Player1 is playing right now

            try {
                // If the word is empty, so it returns a throw
                if (PlayerTestWord1 === '') throw 'Nenhum dos campos pode ficar vazio!'
                // If the word contains some number it returns a throw
                else if ((/\d/g).test(PlayerTestWord1)) throw 'A palavra não pode conter números!'
                // The word should just have five characters
                else if (PlayerTestWord1.length !== 5) throw 'A palavra tem que ter exactamente 5 caracteres!'
                else if (PlayerTestWord1 === WordPlayer2) setStatusGame({ ...StatusGame, StatusResultPlayer1: 'Win' })
                else setStatusGame({ ...StatusGame, StatusResultPlayer1: 'Not Win' })

                const LettersFinded = FindLetters(PlayerTestWord1, WordPlayer2)
                localStorage.setItem('LettersFindedByPlayer1', JSON.stringify(LettersFinded))

                setOpenModalTest(true)
            } catch (error) {
                alert('Erro: ' + error)
            }

        } else {
            // Player2 is playing right now

            try {
                // If the word is empty, so it returns a throw
                if (PlayerTestWord2 === '') throw 'Nenhum dos campos pode ficar vazio!'
                // If the word contains some number it returns a throw
                else if ((/\d/g).test(PlayerTestWord2)) throw 'A palavra não pode conter números!'
                // The word should just have five characters
                else if (PlayerTestWord2.length !== 5) throw 'A palavra tem que ter exactamente 5 caracteres!'
                else if (PlayerTestWord2 === WordPlayer1) {
                    if (StatusGame.StatusResultPlayer1 !== 'Win') setStatusGame({ ...StatusGame, StatusResultPlayer2: 'Win', GameResult: PlayersNames.player2+' venceu o jogo!' })
                    else setStatusGame({ ...StatusGame, StatusResultPlayer2: 'Win', GameResult: 'Empate' })
                }
                else {
                    if (StatusGame.StatusResultPlayer1 === 'Win') setStatusGame({ ...StatusGame, GameResult: PlayersNames.player1+' venceu o jogo!' })
                    else setStatusGame({ ...StatusGame, GameResult: 'Empate' })
                }

                const LettersFinded = FindLetters(PlayerTestWord2, WordPlayer1)
                localStorage.setItem('LettersFindedByPlayer2', JSON.stringify(LettersFinded))

                setOpenModalTest(true)
            } catch (error) {
                alert('Erro: ' + error)
            }
        }
    }

    const FindLetters = (wordPlayer, wordAdversary) => {
        const wordPlayerLetters = wordPlayer.split('')
        const wordAdversaryLetters = wordAdversary.split('')
        const lettersIncludiedInAdversaryWord = wordPlayerLetters.filter((letter, index, array) => wordAdversary.includes(letter) && array.lastIndexOf(letter) === index)
        const lettersFindedByPlayer = wordAdversaryLetters.filter(letter => lettersIncludiedInAdversaryWord.includes(letter))
        return lettersFindedByPlayer
    }

    return (
        <FormTest {...props}>
            <div>
                <label htmlFor="wordTest1">Palavra de {PlayersNames.player2 ? PlayersNames.player2 : 'Jogador 2'}</label>
                <div>
                    <input type="password" name='PlayerTestWord1' value={PlayersTestWords.PlayerTestWord1} id='wordTest1' maxLength={5} onChange={handleChange} disabled={StatusGame.PlayerIsTesting === 'player2' ? true : false} />
                    <TestButton id_player={1} MakeWordsTest={MakeWordsTest} disabled={StatusGame.PlayerIsTesting === 'player2' ? true : false} />
                </div>
            </div>
            <div>
                <label htmlFor="wordTest2">Palavra de {PlayersNames.player1 ? PlayersNames.player1 : 'Jogador 1'}</label>
                <div>
                    <input type="password" name='PlayerTestWord2' value={PlayersTestWords.PlayerTestWord2} id='wordTest2' maxLength={5} onChange={handleChange} disabled={StatusGame.PlayerIsTesting === 'player1' ? true : false} />
                    <TestButton id_player={2} MakeWordsTest={MakeWordsTest} disabled={StatusGame.PlayerIsTesting === 'player1' ? true : false} />
                </div>
            </div>
            <p className='statusInfo'><strong>Status do Jogo:</strong> Vez de {StatusGame.PlayerIsTesting === 'player1' ? PlayersNames.player1 || 'Jogador 1' : PlayersNames.player2 || 'Jogador 2'} testar.</p>
            {OpenModalTest && <ModalWordsTestResults Status={StatusGame} open={OpenModalTest} onClose={handleCloseModalTest} />}
            {OpenModalEnd && <ModalShowResults Status={StatusGame} open={OpenModalEnd} onClose={handleCloseModalEnd} />}
        </FormTest>
    )
}

export default FormTestWords