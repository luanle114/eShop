import defaultTheme  from "../theme/defaultTheme";
import styled from 'styled-components';

export const IStyledNavbar = styled.div`
  .n-container{
    height: 150px;
    padding: ${defaultTheme.spaceMP[3]}px ${defaultTheme.spaceMP[10]}px;
    box-shadow: ${defaultTheme.spaceMP[0]}px ${defaultTheme.spaceMP[2]}px ${defaultTheme.spaceMP[5]}px rgba(0, 0, 0, 0.4);
  }

  .n-email{
    letter-spacing: 1.5px;
    margin-right: ${defaultTheme.spaceMP[8]}px;
  }

  .n-row:first-child{
    display: flex;
    justify-content: space-between;
    font-size: ${defaultTheme.fontSize.desktop.fz2}px;
    margin: ${defaultTheme.spaceMP[3]}px ${defaultTheme.spaceMP[0]}px;
  }

  .socials img{
    width: 20px;
    height: auto;
    cursor: pointer;
    margin: ${defaultTheme.spaceMP[0]}px ${defaultTheme.spaceMP[5]}px;
    transition: all 0.5s;
  }

  .socials img:hover{
    transform: scale(1.5);
  }

  .n-row:nth-child(2){
    display: flex;
    justify-content: space-between;
    margin: ${defaultTheme.spaceMP[10]}px ${defaultTheme.spaceMP[0]}px;
  }

  .logo{
    height: 30px;
    width: 150px;
  }

  .icons a{
    color: #001e28;
    font-size: ${defaultTheme.fontSize.desktop.fz5}px;
  }

  .icons span{
    position: relative;
    margin: ${defaultTheme.spaceMP[0]}px ${defaultTheme.spaceMP[8]}px;
    text-transform: uppercase;
  }
  .icons span .totalItems{
    position: absolute;
    top: -${defaultTheme.spaceMP[8]}px;
    right: -30px;
    background-color: #ff0000;
    color: #ffffff;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${defaultTheme.borderRadius[2]}px;
  }

  .items{
    list-style-type: none;
    background: linear-gradient(45deg, #001e28, rgb(53, 53, 53));
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .list{
    margin-right: ${defaultTheme.spaceMP[10]}px;
  }

  .list a{
    font-size: ${defaultTheme.fontSize.desktop.fz6}px;
    text-transform: uppercase;
    color: #ffffff;
    cursor: pointer;
    letter-spacing: 2px;
    transition: all 0.2s;
  }

  .list a:hover{
    color: #ff0000
  }

  .btn{
    display: none;
    position: absolute;
    right: ${defaultTheme.spaceMP[5]}px;
    top: ${defaultTheme.spaceMP[4]}px;
    padding: ${defaultTheme.spaceMP[3]}px;
    color: ${defaultTheme.Colors.grayScale[12]};
    font-size: ${defaultTheme.fontSize.desktop.fz5}px;
  }
  .list a.active{
    color: ${defaultTheme.Colors.primary[4]};
  }

  @media screen and (max-width: 489px) {
    .n-row:first-child{
      font-size: ${defaultTheme.fontSize.desktop.fz1}px;
    }
    
    .socials img{
      width: 20px;
      margin: ${defaultTheme.spaceMP[0]}px ${defaultTheme.spaceMP[2]}px;
    }
    .logo{
      width: 150px;
    }

    .icon a{
      font-size: ${defaultTheme.fontSize.desktop.fz2}px;
    }

    .icon span{
      margin: ${defaultTheme.spaceMP[0]}px ${defaultTheme.spaceMP[5]}px;
    }

    .icon span .totalItems{
      top: -${defaultTheme.spaceMP[5]}px;
      right: -${defaultTheme.spaceMP[10]}px;
      width: 15px;
      height: 15px;
      border-radius: ${defaultTheme.borderRadius[1]}px;
      font-size: ${defaultTheme.fontSize.desktop.fz1}px;
    }

    .list a{
      font-size: ${defaultTheme.fontSize.desktop.fz4}px;
    }

    .list:last-child{
      margin-right: unset;
    }
  }
`;

