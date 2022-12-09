import defaultTheme from "../theme/defaultTheme";
import styled from 'styled-components';

export const IStyledAccount = styled.div`
  .account-container{
    min-height: 100vh;
  }

  .account-row:first-child{
    margin: ${defaultTheme.spaceMP[10]}px ${defaultTheme.spaceMP[0]}px ${defaultTheme.spaceMP[25]}px ${defaultTheme.spaceMP[0]}px;
  }

  .account-title{
    letter-spacing: 2px;
    text-align: center;
  }

  .account-row:last-child{
    display: flex;
    justify-content: space-evenly;
  }

  .account-row:last-child .account-col:last-child{
    display: flex;
    flex-direction: column;
  }

  .account-row:last-child .account-col:first-child{
    display: flex;
    flex-direction: column;
  }

  .account-row:last-child .account-col:last-child{
    margin-bottom: ${defaultTheme.spaceMP[5]}px;
    font-size: ${defaultTheme.fontSize.desktop.fz5}px;
    letter-spacing: 1.4px;
    color: ${defaultTheme.Colors.grayScale[12]};
    text-transform: uppercase;
    transition: all 0.5s;
  }

  .account-row:last-child .account-col:last-child img{
    width: 300px;
    height: auto;
  }

  .account-row:last-child .account-col:first-child a svg{
    font-size: ${defaultTheme.fontSize.desktop.fz3}px;
  }

  .account-row:last-child .account-col:first-child:hover a svg{
    margin-left: ${defaultTheme.spaceMP[5]}px;
  }

  .user-name{
    text-align: center;
    font-size: ${defaultTheme.fontSize.desktop.fz5}px;
    letter-spacing: 1.5px;
    font-weight: bold;
    margin-top: ${defaultTheme.spaceMP[5]}px;
  }

  @media screen and (max-width: 600px) {
    .account-row:last-child{
      flex-direction: column;
      justify-content: unset;
    }

    .account-row:last-child .account-col{
      align-items: center;
    }

    .account-row:last-child .account-col:first-child{
      margin-bottom: ${defaultTheme.spaceMP[15]}px;
    }

    .account-row:last-child .account-col:last-child img{
      width: 250px;
      height: auto;
    }
  }
`;