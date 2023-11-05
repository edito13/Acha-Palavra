import React from 'react'
import { Link } from 'react-router-dom'
import { Tooltip } from '@material-ui/core' 
import { Games, FormatQuote, LibraryBooks } from '@material-ui/icons'
import { ConfigMenuContainer, TitleTooltip } from '../Style/style'
import ThemeConfig from './ThemeConfig'


const ConfigMenu = ({ Theme, ShowMenu }) => {
  return (
    <ConfigMenuContainer className={ShowMenu ? 'Show' : ''} Theme={Theme}>
      <ThemeConfig />
      <ul>
        <li>
          <Tooltip title={<TitleTooltip>Aceda os nossos termos</TitleTooltip>} arrow placement='right'>
            <Link to={'/termos'}>
              <LibraryBooks />
              Termos e políticas
            </Link>
          </Tooltip>
        </li>
        <li>
          <Tooltip title={<TitleTooltip>Tire suas dúvidas</TitleTooltip>} arrow placement='right'>
            <Link to={'/como_funciona'}>
              <Games />
              Como funciona o jogo?
            </Link>
          </Tooltip>
        </li>
        <li>
          <Tooltip title={<TitleTooltip>Saiba mais sobre o jogo</TitleTooltip>} arrow placement='right'>
            <Link to={'/about'}>
              <FormatQuote />
              Sobre o <span>Acha Palavra</span>
            </Link>
          </Tooltip>
        </li>
      </ul>
      <footer>
        <img src={`img/Acha jogo LOGO${Theme !== 'Dark' ? ' branco' : ''}.png`} alt="Acha palavra" />
        <p>{new Date().getFullYear()} - Todos os direitos reservados.</p>
      </footer>
    </ConfigMenuContainer>
  )
}

export default ConfigMenu