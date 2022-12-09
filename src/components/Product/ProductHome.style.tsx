import defaultTheme from "../theme/defaultTheme";
import styled from "styled-components";

export const IStyledProductHome = styled.div`
  .pro-container{
    width: 250px;
    height: auto;
    box-shadow:  0 0 10px ${defaultTheme.Colors.grayScale[12]};
    margin: 0 ${defaultTheme.spaceMP[8]}px ${defaultTheme.spaceMP[8]}px ${defaultTheme.spaceMP[8]}px;
    border-radius: ${defaultTheme.borderRadius[5]}px;
    transition: all 5s;
    &:hover .card-header img{
      transform: scale(1.02);
    }
    .card-header {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: ${defaultTheme.spaceMP[3]}px;
  
      a {
        display: flex;
        justify-content: center;
        align-items: center;
      }
  
      img{
        height: 210px;
        width: 100%;
        transition: all 0.5s;
      }
    }
  
    .card-body{
      text-align: center;
      padding: ${defaultTheme.spaceMP[8]}px ${defaultTheme.spaceMP[3]}px;
      .title{
        margin-bottom: ${defaultTheme.spaceMP[8]}px;
      }
    }
  
    .card-footer{
      padding: 10px
      .btnWish{
        background: transparent;
        border: none;
        font-size: ${defaultTheme.fontSize.desktop.fz4}px
      }
    }
  }
  

  @media screen and (max-width: 800px) {
    .eye{
      display: none;
    }
  }
`;