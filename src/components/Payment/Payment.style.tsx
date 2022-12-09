import defaultTheme from "../theme/defaultTheme";
import styled from "styled-components";

export const IStyledPayment = styled.div`
  .payment-container{
    min-height: 100vh;
  }

  .payment-row:first-child{
    margin: ${defaultTheme.spaceMP[10]}px ${defaultTheme.spaceMP[0]}px ${defaultTheme.spaceMP[12]}px ${defaultTheme.spaceMP[0]}px;
  }

  .payment-title{
    text-align: center;
    letter-spacing: 1.4px;
  }

  .payment-col{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .payment-col form{
    width: 300px;
  }

  .payment-row:last-child .payment-col form .form-group{
    display: flex;
    flex-direction: unset;
    align-items: center;
    justify-content: center;
    margin-bottom: ${defaultTheme.spaceMP[8]}px;
  }

  .payment-row:last-child .payment-col form .form-group input{
    width: unset;
    height: unset;
    margin-left: ${defaultTheme.spaceMP[3]}px;
  }

  .payment-col form .form-group button{
    width: max-content;
    display: block;
    margin: ${defaultTheme.spaceMP[0]}px auto;
  }
`;