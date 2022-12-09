import defaultTheme from "../theme/defaultTheme";
import styled from "styled-components";

export const IStyledProductShop = styled.div`
  .proshop-card{
    width: 250px;
    height: auto;
    box-shadow:  0 0 10px ${defaultTheme.Colors.grayScale[12]};
    margin: 0 ${defaultTheme.spaceMP[8]}px ${defaultTheme.spaceMP[8]}px ${defaultTheme.spaceMP[8]}px;
    border-radius: ${defaultTheme.borderRadius[5]}px;
    transition: all 5s;
  }

  .proshop-card:hover .card-header img{
    transform: scale(1.02);
  }
  .card-footer{
    padding: ${defaultTheme.spaceMP[8]}px ${defaultTheme.spaceMP[3]}px;
    display: flex;
    justify-content: space-around;
  }

  .card-footer button{
    padding: ${defaultTheme.spaceMP[3]}px ${defaultTheme.spaceMP[8]}px;
    border: none;
    transition: all 0.5s;
    border-radius: ${defaultTheme.borderRadius[2]}px;
    background-color: transparent;
    font-size: ${defaultTheme.fontSize.desktop.fz6}px;
  }

  .card-footer button:first-child{
    color: ${defaultTheme.Colors.primary[6]};
  }

  .card-footer button:nth-child(2){
    color: ${defaultTheme.Colors.primary[4]};
  }

  .card-footer button:nth-child(3){
    color: ${defaultTheme.Colors.primary[7]};
  }

  .card-footer button:hover{
    transform: translateY(-5px);
  }

  button.cart.cart-out{
    font-size: ${defaultTheme.fontSize.desktop.fz2}px !important;
    color: ${defaultTheme.Colors.grayScale[12]};
  }
  button.cart.cart-out:hover{
    color: ${defaultTheme.Colors.primary[7]};
  }
`;