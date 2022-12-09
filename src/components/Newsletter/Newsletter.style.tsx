import defaultTheme from "../theme/defaultTheme";
import styled from "styled-components";

export const IStyledNewsletter = styled.div`
  .news-container{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${defaultTheme.Colors.grayScale[12]};
  }

  .news-title{
    font-size: ${defaultTheme.fontSize.desktop.fz12*2}px;
    margin-bottom: ${defaultTheme.spaceMP[10]}px;
    letter-spacing: 3px;
  }

  .news-desc{
    text-align: center;
    margin-bottom: ${defaultTheme.spaceMP[10]}px;
  }

  .input-container{
    display: flex;
    justify-content: center;
  }

  .input-container input{
    width: 300px;
    height: 40px;
    padding: ${defaultTheme.spaceMP[3]}px ${defaultTheme.spaceMP[8]}px;
    border: none;
    outline: none;
    border-bottom: 1px solid ${defaultTheme.Colors.grayScale[12]};
    background-color: transparent;
    letter-spacing: 1.2px;
  }

  .input-container button{
    padding: ${defaultTheme.spaceMP[3]}px ${defaultTheme.spaceMP[10]}px;
    background-color: ${defaultTheme.Colors.grayScale[12]};
    color: ${defaultTheme.Colors.grayScale[0]};
    border: none;
    outline: none;
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }

  .input-container button:hover{
    background-color: ${defaultTheme.Colors.primary[4]};
  }

  @media screen and (max-width: 481px) {
    .input-container input{
      width: 70%;
      font-size: ${defaultTheme.fontSize.desktop.fz2}px;
    }

    .news-title{
      font-size: ${defaultTheme.fontSize.desktop.fz11}px;
    }

    .news-desc{
      font-size: ${defaultTheme.fontSize.desktop.fz2}px;
    } 
  }
`;