import defaultTheme from "../theme/defaultTheme";
import styled from "styled-components";

export const IStyledOrderHistory = styled.div`
  .orderhistory-container{
    min-height: 100vh;
  }

  .orderhistory-col:first-child{
    margin: ${defaultTheme.spaceMP[10]}px ${defaultTheme.spaceMP[0]}px ${defaultTheme.spaceMP[25]}px ${defaultTheme.spaceMP[10]}px;
  }

  .orderhistory-title{
    text-align: center;
    letter-spacing: 2px;
    margin-bottom: ${defaultTheme.spaceMP[3]}px;
  }

  .orderhistory-row:last-child .orderhistory-col{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

  .orderhistory-row:last-child .orderhistory-col tables{
    width: 80%;
    overflow-x: auto;
  }

  .orderhistory-row:last-child .orderhistory-col table{
    width: 100%;
    white-space: nowrap;
  }

  .orderhistory-row:last-child .orderhistory-col table tbody tr{
    text-align: center;
    margin-bottom: ${defaultTheme.spaceMP[5]}px;
  }

  .orderhistory-row:last-child .orderhistory-col table tbody tr td button{
    background-color: ${defaultTheme.Colors.grayScale[12]};
    color: ${defaultTheme.Colors.grayScale[0]};
    transition: all 0.5s;
  }

  .orderhistory-row:last-child .orderhistory-col table tbody tr td button:hover{
    background-color: ${defaultTheme.Colors.primary[4]};
  }

  .orderhistory-row:last-child .orderhistory-col table th,
  .orderhistory-row:last-child .orderhistory-col table td{
    padding: ${defaultTheme.spaceMP[3]}px ${defaultTheme.spaceMP[8]}px;
  }

  .orderhistory-row:last-child .orderhistory-col .account-back{
    margin-top: ${defaultTheme.spaceMP[25]}px;
  }

  .orderhistory-row:last-child .orderhistory-col .account-back a{
    color: ${defaultTheme.Colors.grayScale[12]};
    letter-spacing: 1.4px;
  }
  .orderhistory-row:last-child .orderhistory-col .account-back a svg{
    font-size: ${defaultTheme.fontSize.desktop.fz4}px;
  }

  .orderhistory-row:last-child .orderhistory-col .account-back a:hover{
    color: ${defaultTheme.Colors.primary[4]};
  }
`;