import defaultTheme from "../theme/defaultTheme";
import styled from "styled-components";

export const IStyledProductScreenCard = styled.div`
  .screen-container{
    min-height: 80vh;
  }

  .screen-row{
    display: flex;
    min-height: 80vh;
  }

  .screen-col{
    min-height: 80vh;
    padding: ${defaultTheme.spaceMP[12]}px ${defaultTheme.spaceMP[5]}px;
  }

  .screen-col:first-child{
    display: flex;
    justify-content: center;
    flex: 3;
  }

  .screen-col:last-child{
    flex: 2;
  }

  .screen-images{
    width: 60%;
  }

  .screen-top img{
    width: 300px;
  }

  .screen-top{
    display: flex;
    justify-content: center;
  }

  .screen-bottom{
    margin-top: ${defaultTheme.spaceMP[5]}px;
    display: flex;
    justify-content: space-around;
  }

  .screen-bottom img{
    width: 75px;
    border-radius: 2px;
    box-shadow: 0 0 5px ${defaultTheme.Colors.grayScale[12]};
    padding: ${defaultTheme.spaceMP[1]}px;
    cursor: pointer;
    transition: all 0.5s;
  }

  .screen-bottom img:hover{
    transform: scale(1.02);
  }

  .fourth-div{
    justify-content: unset !important;;
  }

  .fourth-div button{
    margin-right: ${defaultTheme.spaceMP[15]}px;
  }

  @media screen and (max-width: 991px) {
    .screen-row{
      flex-direction: column;
    }

    .screen-col:last-child{
      display: flex;
      justify-content: center;
      margin-top: ${defaultTheme.spaceMP[10]}px;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .screen-container .fourth-div{
      justify-content: space-evenly !important;
    }

    .screen-container .fourth-div button{
      margin-right: unset;
    }

    .screen-container .div{
      width: 100%;
    }

    .screen-container .first-div
    , .screen-container .second-div{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;