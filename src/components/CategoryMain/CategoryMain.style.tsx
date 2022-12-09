import defaultTheme from "../theme/defaultTheme";
import styled from "styled-components";

export const IStyledCategoryMain = styled.div`
  .cate-container{
    height: 100vh;
  }

  .cate-row{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70%;
  }

  .cate-col{
    position: relative;
    flex: 1;
    margin: ${defaultTheme.spaceMP[0]}px ${defaultTheme.spaceMP[3]}px;
    box-shadow: 0 0 10px ${defaultTheme.Colors.grayScale[12]};
    transition: all 1s;
  }
  .cate-col:hover{
    transform: scale(1.01);
  }

  .cate-col img{
    width: 100%;
    height: 250px;
  }

  .cate-content{
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    top: ${defaultTheme.spaceMP[0]}px;
    left: ${defaultTheme.spaceMP[0]}px;
  }

  .cate-content p{
    font-size: ${defaultTheme.fontSize.desktop.fz12}px;
    text-shadow: 0 0 5px ${defaultTheme.Colors.grayScale[12]};
    letter-spacing: 2px;
    font-weight: bold;
    text-transform: uppercase;
    color: ${defaultTheme.Colors.grayScale[0]};
    margin-bottom: ${defaultTheme.spaceMP[10]}px;
  }

  .cate-content .cate-btn{
    padding: ${defaultTheme.spaceMP[5]}px ${defaultTheme.spaceMP[8]}px;
    border: none;
    outline: none;
    text-transform: uppercase;
    font-weight: bold;
    background-color: ${defaultTheme.Colors.grayScale[0]};
    letter-spacing: 1.4px;
    transition: all 0.5s;
  }

  .cate-content .cate-btn:hover{
    background-color: ${defaultTheme.Colors.primary[4]};
  }

  @media screen and (max-width: 769px) {
    .cate-row{
      flex-direction: column;
      height: 100%;
    }

    .cate-col{
      width: 280px;
      height: auto;
      flex: unset;
      margin: ${defaultTheme.spaceMP[10]}px ${defaultTheme.spaceMP[0]}px;
    }
  }
`;