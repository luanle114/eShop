import defaultTheme from "../theme/defaultTheme";
import styled from "styled-components";

export const IStyledCart = styled.div`
  .cart-container{
    min-height: 100vh;
    padding: ${defaultTheme.spaceMP[15]}px ${defaultTheme.spaceMP[5]}px;
  }

  .cart-row:first-child{
    margin-bottom: ${defaultTheme.spaceMP[20]}px;
  }

  .cart-title{
    text-align: center;
    letter-spacing: 3px;
  }

  .cart-row:nth-child(2){
    min-height: 100vh;
    display: flex;
  }

  .cart-col:first-child{
    flex: 3;
  }

  .cart-col:last-child{
    flex: 1;
  }

  .infor{
    letter-spacing: 1.5px;
  }

  .infor a{
    color: ${defaultTheme.Colors.primary[4]};
  }

  .infor a:hover{
    color: yellow;
  }

  .cart-cards{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .cart-card{
    width: 150px;
    box-shadow:  0 0 5px ${defaultTheme.Colors.grayScale[12]};
    margin: 0 ${defaultTheme.spaceMP[13]}px ${defaultTheme.spaceMP[13]}px 0;
    border-radius: ${defaultTheme.borderRadius[3]}px;
  }

  .cart-header img{
    width: 100%;
  }

  .cart-body{
    margin: ${defaultTheme.spaceMP[5]}px 0;
  }

  .cart-body a{
    display: flex;
    justify-content: center;
    letter-spacing: 1.2px;
    margin-bottom: ${defaultTheme.spaceMP[3]}px;
  }

  .cart-quantity{
    display: flex;
    align-items: center;
  }

  .buttons{
    display: flex;
  }

  .cart-body .buttons button{
    background-color: transparent;
    font-size: ${defaultTheme.fontSize.desktop.fz5}px;
  }

  .cart-footer{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: ${defaultTheme.spaceMP[10]}px ${defaultTheme.spaceMP[0]}px ${defaultTheme.spaceMP[5]}px ${defaultTheme.spaceMP[0]}px;
  }

  .cart-footer .cart-price{
    letter-spacing: 1.3px;
    font-weight: bold;
  }

  .cart-footer button{
    background-color: transparent;
    color: ${defaultTheme.Colors.primary[4]};
    font-size: ${defaultTheme.fontSize.desktop.fz5}px;
    padding: unset;
  }

  .checkout-card{
    width: 90%;
    box-shadow: 0 0 5px ${defaultTheme.Colors.grayScale[12]};
    display: block;
    margin: ${defaultTheme.spaceMP[0]}px auto;
    border-radius: ${defaultTheme.borderRadius[3]}px;
  }

  .checkout-body{
    margin-bottom: ${defaultTheme.spaceMP[25]}px;
  }

  .checkout-title{
    text-align: center;
    padding-top: ${defaultTheme.spaceMP[3]}px;
  }

  .checkout-btn{
    display: block;
    margin: ${defaultTheme.spaceMP[0]}px auto;
  }

  .checkout-btn:hover{
    transform: translateY(-5px);
  }

  @media screen and (max-width: 700px) {
    .cart-row:nth-child(2){
      flex-direction: column;
    }
  }
`;