import styled from 'styled-components';
import { Button, Dialog } from '@material-ui/core'

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background: ${({ Theme }) => Theme === 'Light' ? '#fff' : '#000a1f'};
  color: ${({ Theme }) => Theme === 'Light' ? '#000a1f' : '#fff'};

  img{
    width: 100%;
    max-width: 400px;
  }

  header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 50px;

    h1 img{
      max-width: 250px;
    }
  }

  section{
    position: relative;
    display: flex;
    justify-content: center;

    form{
      position: absolute;
      padding: 0px 20px;
      width: 100%;
      max-width: 400px;
    }
  }
`;

export const Modal = styled(Dialog)`
  && .MuiDialog-paperWidthSm{
      width: 100%;
      max-width: 500px;
  }
`

export const ContainerModal = styled.div`
    padding: 50px;
    width: 100%;
    background: ${({ Theme }) => Theme === 'Light' ? '#fff' : '#000a1f'};
    color: ${({ Theme }) => Theme === 'Light' ? '#000a1f' : '#fff'};

    
    h3{
        font-weight: 500;
        font-size: 1.4em;
        text-align: center;
        margin-bottom: 25px;
    }

    form{
        div{
            width: 100%;
            
            label{
                display: block;
                margin-bottom: 5px;
                font-size: 1.1em;
            }

            input{
                width: 100%;
                border: none;
                border: 1px solid #ccc;
                border-radius: 4px;
                padding: 6px 10px;
                font-size: 1.3em;
            }
        }

        div + div{
            margin-top: 25px;
        }

        div:nth-child(3){
          display: flex;
          justify-content: center;
          margin-top: 50px;
        }
    }
`

export const ButtonForm = styled(Button)`
  &&{
    background: #02c902;
    color: #fff;
    font-size: 1.2em;
    text-transform: capitalize;
    transition: .4s ease-in-out;
    
    svg{
      font-size: 1.4em;
    }
  }

  &&:hover{
    background: #008b00;
  }
`;

export const ThemeConfigComponents = styled.div`

  display: flex;
  gap: 10px;
  align-items: center;

  p{
    font-size: 1.4em;
  }

  & > div{
    display: flex;
    align-items: center;
    gap: .7em;

    svg{
      font-size: 2em;
    }

    div{
      width: 70px;
      background: #ccc;
      border-radius: 20px;
      cursor: pointer;
      padding: 2px;
      transition: .4s ease-in-out;

      span{
        display: block;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: #1d1e20;
        border: 1px solid #444;
        transform: translateX(0);
        transition: .4s ease-in-out;
      }
    }
  }

  &.Dark{
      svg:nth-child(3){
        animation: appear .4s ease-in-out;
      }
      svg:nth-child(1){
        visibility: hidden;
      }

      div div{
        background: #0088cded;

        span{
          background: #fff;
          transform: translateX(33px);
          border: 1px solid #ccc;
        }
      }
  }

  &.Light{
    div svg:nth-child(1){
      animation: appear .4s ease-in-out;
    }

    div svg:nth-child(3){
      visibility: hidden;
    }
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

  @keyframes DarkAtivacted{
    from{
      transform: translateX(0)
    }to{
      transform: translateX(30px)
    }
  }
  
`;

export const FormWords = styled.form`
  padding: 0px 20px;
  width: 100%;
  max-width: 400px;
  margin: auto;
  transition: .5s ease-in-out;

  &.hide{
    transform: translateX(-300%);
  }

  div{
    label{
      display: block;
      margin-bottom: 4px;
      font-size: 1.4em;
    }

    input{
      border: none;
      border: 1px solid #ccc;
      padding: 6px 10px;
      font-size: 1.2em;
      border-radius: 4px;
      width: 100%;
    }
      
    & + div{
      margin-top: 40px;
    }
  }

  div:nth-child(3){
    display: flex;
    justify-content: center;
    margin-top: 50px;
  }
`;
export const FormTest = styled.form`
  transform: translateX(-300%);
  transition: .7s ease-in-out;

  &.show{
      transform: translateX(0);
  }

  & > div{
    label{
      display: block;
      margin-bottom: 4px;
      font-size: 1.4em;
    }

    div{
      display: flex;
      gap: .8em;
      align-items: center;  
  
      input{
        border: none;
        border: 1px solid #ccc;
        padding: 6px 10px;
        font-size: 1.2em;
        border-radius: 4px;
        width: 100%;
      }
        
    }
    & + div{
      margin-top: 40px;
    }
  }

  div:nth-child(3){
    display: flex;
    justify-content: center;
    margin-top: 50px;
  }

  .statusInfo{
    margin-top: 20px;
    font-size: 1.2em;
  }
`;

export const StartGameButton = styled(Button)`
  &&{
    background: linear-gradient(#0ea7ff, #0381ca);
    color: #fff;
    text-shadow: 1px 1px 2px 3px #0ea7ff;
    padding: 8px;
    text-transform: capitalize;
    font-size: 1.3em;
    transition: .4s ease-in-out;
    width: 100%;
    
    svg{
      font-size: 1.4em;
    }
  }

  &&:hover{
    background: linear-gradient(#016ca9, #014c78);
  }
`;

export const TestButton = styled(Button)`
  &&:disabled{
    background: #444;
    color: #c1c1c1;
    cursor: copy;
  }
`;

export const ContainerModalResults = styled(ContainerModal)`
  background: #fff;
  color: #000a1f;
  padding: 2em .5em;

  h1{
    text-align: center;
    font-weight: 500;

  }

  & > div{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;
  }

  .Loading{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;

    & > *{
      animation: appear 1s ease-in-out backwards;
    }
    
    img{
      animation-delay: 1s;
      margin: 20px auto;
      transform: scale(1.6)
    }
    
    p{
      font-size: 1.3em;
      animation-delay: 1.7s;
      animation-duration: 1.2s;
    }

    @keyframes appear{
      from{
        opacity: 0;
      }to{
        opacity: 1;
      }
    }
  }

  .Results{
    & > *{
      animation: appear 1s ease-in-out backwards;
    }
    
    img{
      max-width: 280px;
    }
    
    h1{
      animation-delay: .7s;
      font-size: 1.5em;
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

    .buttons{
      width: 100%;
      max-width: 70%;
      display: flex;
      gap: 1.5em;
      
      button{
        flex: 1;
        text-transform: capitalize;
        font-size: 1.2em;
        transition: .4s ease-in-out;
        border-left: 3px solid transparent;
      }      
      
      button:nth-child(2){
        background: linear-gradient(#e31515, #b70101);
        color: #fff;
        text-shadow: 1px 1px 2px 3px #e31515;
        max-width: 100px;
        transition: .3s ease-in-out;

        &:hover{
          background: linear-gradient(#9d0404, #870000);
        }
      }
    }
  }
`;

export const ConfigMenuContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  background:  ${({ Theme }) => Theme === 'Dark' ?  '#fff' : '#000a1f' };
  color:  ${({ Theme }) => Theme !== 'Dark' ?  '#fff' : '#000a1f' };
  width: 100%;
  height: 100vh;
  padding: 50px 30px 30px; 
  max-width: 350px;
  transform: translateX(-100%);
  transition: .5s ease-in-out;

  &.Show{
    transform: translateX(0);
  }

  ul{
    margin-top: 10vh;
    display: flex;
    flex-direction: column;
    gap: 10px;

    li{  
      transition: .3s ease-in-out;
      display: block;
      border-left: 2px solid transparent;
      
      a{
        padding: 10px 0;
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 1.2em;
        color:  ${({Theme}) => Theme !== 'Dark' ?  '#fff' : '#000a1f' };
        transition: .3s ease-in-out;
      }

      &:hover{
        border-left-color: #3ee;

        a{
          padding-left: 14px;
          color: #3ee;
        }
      }
    }
  }

  footer{
    justify-self: end;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    border-top: 1px solid #e8e8e8;
    margin-top: 26vh;
    padding-top: 20px;

    img{
      max-width: 50%;
      margin-bottom: 8px;
    }

    p{
      color: ${({Theme}) => Theme !== 'Dark' ?  '#eee' : '#000a1f' };
      letter-spacing: .5px;
      text-align: center;
    }
  }

`;

export const ButtonConfig = styled(Button)`
  &&{
    background: #e8e8e8;
    font-size: 1.3em;
    text-transform: capitalize;

    svg{
      font-size: 1.5em;
    }
  }
`;

export const TitleTooltip = styled.p`
  font-size: 1.5em;
  padding: 5px;
`;

export const ButtonRenew = styled(Button)`
  &&{
    background: linear-gradient(#0ea7ff, #0381ca);
    color: #fff;
    text-shadow: 1px 1px 2px 3px #0ea7ff;
    transition: .3s ease-in-out;
    
    svg{
      font-size: 1.4em;
    }
  }

  &&:hover{
    background: linear-gradient(#016ca9, #014c78);
  }
`;