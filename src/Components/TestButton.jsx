/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import { TestButton } from '../Style/style'

export default ({ id_player, MakeWordsTest }) => {
  return (
    <TestButton 
        variant='contained' 
        onClick={() => MakeWordsTest(id_player)}
        disableElevation
    >
        Testar
    </TestButton>
  )
}
