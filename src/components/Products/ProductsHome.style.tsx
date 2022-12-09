import defaultTheme from "../theme/defaultTheme";
import styled from "styled-components";

export const IStyledProsHome = styled.div`
  .hpros-container{
    padding: ${defaultTheme.spaceMP[10]}px ${defaultTheme.spaceMP[12]}px;
  }

  .hpros-container h2{
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 3px;
    margin-bottom: ${defaultTheme.spaceMP[25]}px;
  }

  .hpros-row{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .loading{
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  .error{
    color: ${defaultTheme.Colors.primary[4]};
  }
`;