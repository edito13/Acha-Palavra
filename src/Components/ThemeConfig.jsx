import React, { useContext } from 'react'
import Brightness7 from '@material-ui/icons/Brightness7'
import NightsStay from '@material-ui/icons/NightsStay'
import { ThemeConfigComponents } from '../Style/style'
import ThemeContext from '../Config/ThemeContext'

const ThemeConfig = () => {

    const { Theme, ToggleTheme } = useContext(ThemeContext)

    return (
        <ThemeConfigComponents className={Theme === 'Dark' ? 'Dark' : 'Light'}>
            <p>Tema:</p>
            <div>
                <Brightness7 />
                <div onClick={ToggleTheme}>
                    <span />
                </div>
                <NightsStay />
            </div>
        </ThemeConfigComponents>
    )
}

export default ThemeConfig