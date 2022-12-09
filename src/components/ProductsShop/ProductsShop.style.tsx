import defaultTheme from "../theme/defaultTheme";
import styled from "styled-components";

export const IstyledProductsShop = styled.div`
  .prosShop-row:first-child{
    display: flex;
  }

  .prosShop-col:first-child{
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .prosShop-col:first-child h2{
    letter-spacing: 2px;
    margin-bottom: ${defaultTheme.spaceMP[10]}px;
  }

  .prosShop-col:last-child{
    flex: 5;
  }

  .prosShop-products{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: ${defaultTheme.spaceMP[15]}px;
    margin-top: ${defaultTheme.spaceMP[5]}px;
  }

  .prosShop-pagination{
    display: flex;
    justify-content: center;
  }

  .prosShop-btn{
    width: max-content;
    background-color: transparent;
    margin-bottom: ${defaultTheme.spaceMP[5]}px;
    font-weight: bold;
  }

  .prosShop-btn svg{
    transition: all 0.5s;
  }

  .prosShop-btn:hover svg{
    color: ${defaultTheme.Colors.primary[4]};
    margin-left: ${defaultTheme.spaceMP[3]}px;
  }

  .paginationBttns{
    width: 80%;
    height: 40px;
    list-style: none;
    display: flex;
    justify-content: center;
  }

  .paginationBttns a{
    padding: ${defaultTheme.spaceMP[3]}px ${defaultTheme.spaceMP[5]}px;
    margin: ${defaultTheme.spaceMP[4]}px;
    border-radius:  ${defaultTheme.borderRadius[2]}px;
    border: 1px solid ${defaultTheme.Colors.grayScale[12]};
    color: ${defaultTheme.Colors.grayScale[12]};
    cursor: pointer;
  }

  .paginationBttns a:hover{
    color: ${defaultTheme.Colors.grayScale[0]};
    background-color: ${defaultTheme.Colors.primary[4]};
  }

  .paginationActive a{
    color: ${defaultTheme.Colors.grayScale[0]};
    background-color: ${defaultTheme.Colors.primary[4]};
  }

  .paginationDisabled a{
    color: rgba(128, 128, 128, 0.11);
    background-color: rgba(128, 128, 128, 0.11);
  }

  .paginationDisabled:hover a{
    color: rgba(128, 128, 128, 0.11);
    background-color: rgba(128, 128, 128, 0.11);
  }

  @media screen and (max-width: 530px) {
    .prosShop-row:first-child{
      flex-direction: column;
    }

    .prosShop-col:first-child{
      display: flex;
      align-items: center;
      flex-direction: unset;
    }
  }
`;