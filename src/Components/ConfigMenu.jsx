import React from 'react'
import { ConfigMenuContainer } from '../Style/style'
import ThemeConfig from './ThemeConfig'


const ConfigMenu = ({ Theme, ShowMenu }) => {
  return (
    <ConfigMenuContainer className={ ShowMenu ? 'Show' : '' } Theme={Theme}>
        <ThemeConfig />
    </ConfigMenuContainer>
  )
}

export default ConfigMenu