import defaultTheme from "../theme/defaultTheme";
import styled from "styled-components";

export const IStyledPlaceOrder = styled.div`
  .order-container{
    min-height: 100vh;
  }

  .order-row:first-child{
    margin: ${defaultTheme.spaceMP[10]}px ${defaultTheme.spaceMP[0]}px ${defaultTheme.spaceMP[12]}px ${defaultTheme.spaceMP[0]}px;
  }

  .order-row:first-child .order-col {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .order-title{
    text-align: center;
    letter-spacing: 1.4px;
  }

  .order-row:last-child{
    margin-top: ${defaultTheme.spaceMP[20]}px;
    padding: ${defaultTheme.spaceMP[0]}px ${defaultTheme.spaceMP[12]}px;
    display: flex;
  }

  .order-row:last-child .order-col:first-child{
    flex: 2;
  }

  .order-row:last-child .order-col:last-child{
    flex: 1;
  }

  .order-shipping{
    letter-spacing: 1.4px;
  }

  .order-shipping-info{
    letter-spacing: 1.4px;
    font-size: ${defaultTheme.fontSize.desktop.fz2}px;
    margin-bottom: ${defaultTheme.spaceMP[3]}px;
  }

  .order-items-title{
    letter-spacing: 1.4px;
    margin-bottom: ${defaultTheme.spaceMP[3]}px;
  }

  .order-shipping-info a{
    margin-left: ${defaultTheme.spaceMP[8]}px;
    font-weight: bold;
    color: ${defaultTheme.Colors.primary[4]};
  }

  .order-card{
    width: 120px;
    height: auto;
    padding: ${defaultTheme.spaceMP[3]}px;
    border-radius: ${defaultTheme.borderRadius[1]}px;
    box-shadow: 0 0 5px ${defaultTheme.Colors.grayScale[12]};
  }

  .order-card .order-card-body img{
    width: 100%;
  }

  .order-items{
    margin-top: ${defaultTheme.spaceMP[15]}px;
  }

  .order-cards{
    display: flex;
    flex-wrap: wrap;
    gap: ${defaultTheme.spaceMP[10]}px;
    margin-bottom: ${defaultTheme.spaceMP[10]}px;
  }

  .order-card .order-card-body img{
    width: 100%;
  }

  .order-card .order-card-body a{
    font-size: ${defaultTheme.fontSize.desktop.fz4}px;
    display: flex;
    justify-content: center;
    color: ${defaultTheme.Colors.grayScale[12]};
  }

  .order-card .order-card-footer{
    display: flex;
    justify-content: space-evenly;
    margin-top: ${defaultTheme.spaceMP[5]}px;
  }

  .order-card .order-card-footer span{
    font-size: ${defaultTheme.fontSize.desktop.fz4}px;
  }

  .order-edit{
    color: ${defaultTheme.Colors.grayScale[12]};
  }

  .order-payment{
    margin-top: ${defaultTheme.spaceMP[15]}px;
  }

  .order-summary-info{
    display: flex;
    justify-content: space-between;
    margin: ${defaultTheme.spaceMP[5]}px ${defaultTheme.spaceMP[0]}px;
    border-bottom: 1px dotted ${defaultTheme.Colors.grayScale[12]};
  }

  .order-summary-button{
    margin-top: ${defaultTheme.spaceMP[20]}px;
  }

  .order-summary-button button{
    background-color: ${defaultTheme.Colors.grayScale[12]};
    color: ${defaultTheme.Colors.grayScale[0]};
    transition: all 0.5s;
    display: block;
    margin: ${defaultTheme.spaceMP[0]}px auto;
  }

  .order-summary-button button:hover{
    background-color: ${defaultTheme.Colors.primary[4]};
  }

  @media screen and (max-width: 600px) {
    .order-row:last-child{
      flex-direction: column;
    }
  }
`;