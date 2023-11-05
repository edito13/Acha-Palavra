import React, { useContext } from 'react'
import { PlayCircleFilled } from '@material-ui/icons'
import ThemeContext from '../Config/ThemeContext'
import { ButtonPlayStyle } from '../Style/StartPageStyle'

const ButtonPlay = props => {

    const { Theme } = useContext(ThemeContext)

    return (
        <ButtonPlayStyle {...props} variant='contained' startIcon={<PlayCircleFilled />} theme={Theme} disableElevation>
            Play Game
        </ButtonPlayStyle>
    )
}

export default ButtonPlay