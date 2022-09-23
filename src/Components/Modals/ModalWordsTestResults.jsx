import React, { useContext, useEffect, useState } from 'react'
import NamesContext from '../../Config/NamesContext';
import { ContainerModalResults, Modal } from '../../Style/style'

const ModalWordsTestResults = ({ Status, ...props }) => {

  const { PlayersNames } = useContext(NamesContext)
  const [Player, setPlayer] = useState({});
  const [Loading, setLoading] = useState(true);

  console.log('Teste')

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000)
  }, [])

  useEffect(() => {
    // Get the Data's player is testing at moment

    setPlayer({
      name: Status.PlayerIsTesting === 'player1' ? PlayersNames.player1 || 'Jogador 1': PlayersNames.player2 || 'Jogador 2',
      statusPlayer: Status.PlayerIsTesting === 'player1' ? Status.StatusResultPlayer1 : Status.StatusResultPlayer2,
      lettersFindedByPlayer: Status.PlayerIsTesting === 'player1' 
      ? JSON.parse(localStorage.LettersFindedByPlayer1) || '' 
      : JSON.parse(localStorage.LettersFindedByPlayer2) || ''
    })
  }, [PlayersNames, Status]);

  return (
    <Modal {...props}>
      <ContainerModalResults>
        <div>
          {
            Loading ? (
              <div className='Loading'>
                <img src="./img/loading.svg" alt="Loading" />
                <p>Efectuando o teste, {Player.name} aguarde.</p>
              </div>
            ) :
              (
                  <div className='results'>
                    <h3>Resultados para o teste de {Player.name}</h3>
                    {
                      Player.statusPlayer === 'Win' ? 
                      <p className='right'>Acertou a palavra, parabéns</p> :
                      <p className='FindWords'>Você acertou <span>{ Player.lettersFindedByPlayer ? Player.lettersFindedByPlayer.length : '' } letra{ Player.lettersFindedByPlayer.length > 1 ? 's' : '' },</span> letras descobertas são <span>{ Player.lettersFindedByPlayer.join(',') }</span>.</p>
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