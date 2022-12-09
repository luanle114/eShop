import defaultTheme from "../theme/defaultTheme";
import styled from 'styled-components';

export const IStyledLoadingBox = styled.div`
  .message-container{
    min-height: 100vh;
    padding-top: ${defaultTheme.spaceMP[15]}px;
  }

  .messageLoading{
    text-transform: uppercase;
    letter-spacing: 2px;
    text-align: center;
    color: ${defaultTheme.Colors.grayScale[12]};
  }
`;