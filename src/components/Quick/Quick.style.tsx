import defaultTheme from "../theme/defaultTheme";
import styled from "styled-components";

export const IStyledQuick = styled.div`
  .main-container{
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    background-color: ${defaultTheme.Colors.grayScale[13]};
  }

  .main-containerOne{
    display: none;
  }

  .card-quick{
    width: 800px;
    background-color: #ffffff;
    padding: ${defaultTheme.spaceMP[15]}px ${defaultTheme.spaceMP[5]}px;
    border-radius: ${defaultTheme.spaceMP[5]}px;
    display: flex;
  }

  .card-row{
    flex: 1;
  }

  .card-top img{
    width: 300px;
  }

  .card-top{
    display: flex;
    justify-content: center;
  }

  .card-bottom{
    display: flex;
    justify-content: space-around;
  }

  .card-bottom img{
    width: 75px;
    border-radius: ${defaultTheme.spaceMP[1]}px;
    box-shadow: 0 0 5px #000000;
    padding: ${defaultTheme.spaceMP[1]}px;
    cursor: pointer;
    transition: all 0.5s;
  }

  .card-bottom img:hover{
    transform: scale(1.02);
  }

  .div{
    margin-bottom: ${defaultTheme.spaceMP[15]*2}px;
  }

  .title{
    letter-spacing: 2px;
    font-weight: 300;
    font-size: ${defaultTheme.fontSize.desktop.fz10}px;
  }

  .category{
    text-transform: uppercase;
    padding: ${defaultTheme.spaceMP[1]}px ${defaultTheme.spaceMP[5]}px;
    background-color: ${defaultTheme.Colors.grayScale[12]};
    max-width: max-content;
    color: ${defaultTheme.Colors.grayScale[0]};
    letter-spacing: 1.5px;
  }

  .price{
    font-weight: bold;
    font-size: ${defaultTheme.fontSize.desktop.fz3}px;
  }

  .quantity{
    padding: ${defaultTheme.spaceMP[1]}px ${defaultTheme.spaceMP[15]}px;
    background-color: #00000011;
    margin-top: ${defaultTheme.spaceMP[8]}px;
    max-width: max-content;

  }

  .desc{
    letter-spacing: 1.2px;
  }

  .fourth-div{
    margin-top: ${defaultTheme.spaceMP[15]}px;
    display: flex;
    justify-content: space-evenly;
  }

  button{
    border: none;
    padding: ${defaultTheme.spaceMP[5]}px ${defaultTheme.spaceMP[12]}px;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    cursor: pointer;
    transition: all 0.5s;
    border-radius: ${defaultTheme.borderRadius[2]}px;
  }

  button:active{
    transform: translateY(-10px);
  }

  .cart{
    background-color: ${defaultTheme.Colors.primary[7]};
    color: ${defaultTheme.Colors.grayScale[0]};
  }

  .wish{
    background-color: ${defaultTheme.Colors.primary[6]};
    color: ${defaultTheme.Colors.grayScale[0]};
  }

  .cart:hover{
    background-color: ${defaultTheme.Colors.grayScale[0]};
    color: ${defaultTheme.Colors.primary[7]};
  }

  .wish:hover{
    background-color: ${defaultTheme.Colors.grayScale[0]};
    color: ${defaultTheme.Colors.primary[6]};
  }

  .back{
    padding: ${defaultTheme.spaceMP[3]}px ${defaultTheme.spaceMP[13]}px;
    background-color: ${defaultTheme.Colors.grayScale[12]};
    color: ${defaultTheme.Colors.grayScale[0]};
    letter-spacing: 1.2px;
    text-transform: uppercase;
    text-decoration: none;
    transition: all 0.5s;
  }

  .back:hover{
    transform: translateY(-5px);
  }
`;