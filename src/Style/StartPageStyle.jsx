import { Button } from '@material-ui/core';
import styled from 'styled-components';
import { Container } from './style';

export const ContainerStart = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2.5em;
  padding: 50px;

  @media(max-width: 600px){
    img{
        max-width: 350px;
    }
  }

  img{
    animation: appear .9s .9s ease-in-out backwards;
    
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

  p{
    font-size: 1.6em;
    color: ${({ Theme }) => Theme === 'Dark' ? '#eee' : '#000a1f'};
    animation: appear .9s 2.3s ease-in-out backwards;
    
    @keyframes appear{
        from{
            opacity: 0;
            transform: scale(.7)
        }to{
            opacity: 1;
            transform: scale(1)
        }
    }

    span{
        animation: loading .4s .7s infinite alternate ease-in-out backwards;
    }

    @keyframes loading{
        from{
            letter-spacing: 0px;
        }to{
            letter-spacing: 8px;
        }
    }
  }
`;

export const ButtonPlayStyle = styled(Button)`
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