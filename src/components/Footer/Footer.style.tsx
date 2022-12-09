import defaultTheme from "../theme/defaultTheme"
import styled from 'styled-components';

export const IStyledFooter = styled.div`
  .footer-container{
    padding: ${defaultTheme.spaceMP[10]}px ${defaultTheme.spaceMP[8]}px;
  }

  .footer-row{
    display: flex;
    justify-content: space-between;
  }

  .footer-col{
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .footer-col:first-child img{
    width: 250px;
  }

  .footer-col:first-child img{
    width: 250px;
    margin-bottom: ${defaultTheme.spaceMP[10]}px;
  }

  .footer-col:first-child p{
    text-align: center;
    letter-spacing: 1.2px;
  }

  .footer-col:nth-child(2) h2, 
  .footer-col:nth-child(3) h2, 
  .footer-col:nth-child(4) h2{
    margin-bottom: ${defaultTheme.spaceMP[10]}px;
    letter-spacing: 1.5px;
  }

  .footer-col:nth-child(2) ul li , 
  .footer-col:nth-child(3) ul li{
    margin-bottom: ${defaultTheme.spaceMP[5]}px;
  } 

  .footer-col:nth-child(2) ul li a, 
  .footer-col:nth-child(3) ul li a{
    color: ${defaultTheme.Colors.grayScale[11]};
    letter-spacing: 1.2px;
  }

  .footer-col:nth-child(2) ul li a:hover, 
  .footer-col:nth-child(3) ul li a:hover{
    color: ${defaultTheme.Colors.primary[4]};
  }

  .footer-copyrow{
    text-align: center;
    font-size: ${defaultTheme.fontSize.desktop.fz3}px;
    padding: ${defaultTheme.spaceMP[5]}px ${defaultTheme.spaceMP[0]}px;
    letter-spacing: 1.2px;
  }

  @media screen and (max-width: 780) {
    .footer-row{
      flex-direction: column;
    }
    .footer-col{
      margin-bottom: ${defaultTheme.spaceMP[10]}px;
    }
  }
`;