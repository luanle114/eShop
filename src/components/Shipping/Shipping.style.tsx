import defaultTheme from "../theme/defaultTheme";
import styled from "styled-components";

export const IStyledShipping = styled.div`
  .shipping-container{
    min-height: 100vh;
  }

  .shipping-row:first-child{
    margin: ${defaultTheme.spaceMP[10]}px ${defaultTheme.spaceMP[0]}px ${defaultTheme.spaceMP[13]}px ${defaultTheme.spaceMP[0]}px ;
  }

  .shipping-title{
    text-align: center;
    letter-spacing: 1.4px;
  }

  .shipping-col{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .shipping-col form{
    width: 300px;
  }

  .shipping-col form .form-group button{
    width: max-content;
    display: block;
    margin: ${defaultTheme.spaceMP[0]}px auto;
  }
`;