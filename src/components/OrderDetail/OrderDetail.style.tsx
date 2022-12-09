import defaultTheme from "../theme/defaultTheme";
import styled from 'styled-components';

export const IStyledOrderDetail = styled.div`
  .order-details-container{
    min-height: 100vh;
  }

  .order-details-row{
    margin: ${defaultTheme.spaceMP[10]}px ${defaultTheme.spaceMP[0]}px ${defaultTheme.spaceMP[25]}px ${defaultTheme.spaceMP[0]}px;
  }

  .order-details-title{
    text-align: center;
    letter-spacing: 2px;
    margin-bottom: ${defaultTheme.spaceMP[3]}px;
  }

  .order-details-subtitle{
    text-align: center;
    letter-spacing: 1.2px;
  }

  .after{
    font-size: ${defaultTheme.fontSize.desktop.fz1}px;
    color: #ff0000;
  }
`;

