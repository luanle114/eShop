import defaultTheme from "../theme/defaultTheme";
import styled from "styled-components";

export const IStyledSlider = styled.div`
  .s-container{
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    overflow: hidden;
  }
  .s-arrow{
    position: absolute;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin: auto;
    cursor: pointer;
    transition: all 1s;
    top: ${defaultTheme.spaceMP[0]};
    bottom: ${defaultTheme.spaceMP[0]};
    z-index: 2;
  }

  .s-arrow.left{
    left: ${defaultTheme.spaceMP[8]}px;
  }

  .s-arrow.right{
    right: ${defaultTheme.spaceMP[8]}px;
  }

  .s-arrow svg{
    font-size: ${defaultTheme.spaceMP[15]}px;
  }

  .s-arrow:hover svg{
    color: ${defaultTheme.Colors.primary[4]};
  }

  .wrapper{
    height: 100%;
    display: flex;
    transform: translateX(0vw);
    transition: all 1.5s ease;
  }

  .slide{
    width: 100vw;
    align-items: center;
  }

  .img-container{
    width: 100%;
    height: 100%;
  }

  .s-img{
    width: 100%;
    height: inherit;
    object-fit: cover;
  }
`;