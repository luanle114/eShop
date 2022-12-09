import defaultTheme from "../theme/defaultTheme";
import styled from "styled-components";

export const IStyledShop = styled.div`
  .shop-row{
    min-height: 100vh;
    margin: ${defaultTheme.spaceMP[25]}px ${defaultTheme.spaceMP[0]}px;
    display: flex;
    padding: ${defaultTheme.spaceMP[0]}px ${defaultTheme.spaceMP[5]}px;
  }

  .shop-col:first-child{
    flex: 1;
  }

  .shop-col:last-child{
    flex: 4;
  }
`;