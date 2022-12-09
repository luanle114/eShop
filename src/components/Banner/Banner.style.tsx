import defaultTheme from "../theme/defaultTheme";
import styled from 'styled-components';

export const IStyledBanner = styled.div`
  .b-container{
    height: 50vh;
  }

  .b-row{
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    height: 100%;
  }

  .b-col{
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${defaultTheme.Colors.grayScale[13]};
    width: 250px;
    height: 100px;
    margin: ${defaultTheme.spaceMP[8]}px ${defaultTheme.spaceMP[0]}px;
  }

  .b-col svg{
    font-size: ${defaultTheme.fontSize.desktop.fz8}px;
    color: ${defaultTheme.Colors.primary[4]};
  }

  .b-col span{
    margin-left: ${defaultTheme.spaceMP[5]}px;
    font-size: ${defaultTheme.fontSize.desktop.fz8}px;
  }

  @media screen and (max-width: 480px) {
    .b-container{
      height: 56vh !important;
    }
  }
`;