import React, { useContext, useEffect, useState } from 'react'
import NamesContext from '../../Config/NamesContext';
import { ContainerModalResults, Modal } from '../../Style/style'

const ModalWordsTestResults = ({ Status, ...props }) => {

  const { PlayersNames } = useContext(NamesContext)
  const [Player, setPlayer] = useState({});
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false))
  }, [])

  useEffect(() => {
    setPlayer({
      name: Status.PlayerIsTesting === 'player1' ? PlayersNames.player1 : PlayersNames.player2,
      statusPlayer: Status.PlayerIsTesting === 'player1' ? Status.StatusResultPlayer1 : Status.StatusResultPlayer2,
      lettersFindedByPlayer: Status.PlayerIsTesting === 'player1' ? 
      GetLettersFinded(localStorage.LettersFindedByPlayer1) : 
      GetLettersFinded(localStorage.LettersFindedByPlayer2)
    })
  }, [PlayersNames, Status]);

  const GetLettersFinded = expression => expression ? JSON.parse(expression) : ''

  return (
    <Modal {...props}>
      <ContainerModalResults>
        <h1>Modal Test Results</h1>
        <div>
          {
            Loading ? (
              <div className='Loading'>
                <img src="./img/loading.svg" alt="Loading" />
                <p>Efectuando o teste, {Player.name} aguarde.</p>
              </div>
            ) :
              (
                  <div>
                    <h3>Resultados para o teste de {Player.name}</h3>
                    {
                      Player.statusPlayer === 'Win' ? 
                      <p className='right'>Acertou a palavra, parabéns</p> :
                      <p className='FindWords'>Você acertou <span>{ Player.lettersFindedByPlayer ? Player.lettersFindedByPlayer.length : '' } letra{ Player.lettersFindedByPlayer.length > 1 ? 's' : '' }</span></p>
                    }
                  </div>
              )
          }
        </div>
      </ContainerModalResults>
    </Modal>
  )
}

export default ModalWordsTestResults