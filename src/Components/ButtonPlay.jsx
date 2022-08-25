import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '@material-ui/core'
import ThemeContext from '../Config/ThemeContext'
import { PlayCircleFilled } from '@material-ui/icons'

const ButtonPlayStyle = styled(Button)`
    &&{
        background: ${({ theme }) => theme === 'Dark' ? '#eee' : '#000a1f'};
        color: ${({ theme }) => theme === 'Dark' ? '#000a1f' : '#eee'};
        font-size: 1.2em;
        padding: auto 30px;
        margin-top: 15px;
        animation: appear 1s .7s ease-in-out backwards;
        transition: .4s ease-in-out;

        svg{
            font-size: 2em;
        }

    
        @keyframes appear{
            from{
                opacity: 0;
                transform: scale(.7)
            }to{
                opacity: 1;
                transform: scale(1)
            }
        }
    }

    &&:hover{
        letter-spacing: 5px;
        background: ${({ theme }) => theme === 'Dark' ? '#eee' : '#000a1f'};
        color: ${({ theme }) => theme === 'Dark' ? '#000a1f' : '#eee'};
    }
    
`

const ButtonPlay = () => {

    const navigate = useNavigate()
    const { Theme } = useContext(ThemeContext)


    return <ButtonPlayStyle 
                onClick={() => navigate('/nada')} 
                variant='contained' 
                startIcon={<PlayCircleFilled />} 
                theme={Theme}
                disableElevation
            >
                Play Game
            </ButtonPlayStyle>
} 

export default ButtonPlay