import defaultTheme from "../theme/defaultTheme";
import styled from "styled-components";

export const IStyledMessageBox = styled.div`
  .message-container{
    padding-top: ${defaultTheme.spaceMP[15]}px;
    min-height: 100vh;
  }

  .message{
    text-transform: uppercase;
    letter-spacing: 2px;
    text-align: center;
    color: ${defaultTheme.Colors.primary[4]};
  }
`