import defaultTheme from "../theme/defaultTheme"
import styled from 'styled-components';

export const IStyledCheckoutSteps = styled.div`
  .checkout-steps{
    margin: ${defaultTheme.spaceMP[20]}px ${defaultTheme.spaceMP[0]}px ${defaultTheme.spaceMP[10]}px ${defaultTheme.spaceMP[0]}px;
    display: flex;
  }

  .checkout-steps > p{
    border-bottom: 0.2rem solid ${defaultTheme.Colors.grayScale[6]};
    color: ${defaultTheme.Colors.grayScale[6]};
    margin: ${defaultTheme.spaceMP[0]}px ${defaultTheme.spaceMP[25]}px;
  }

  .checkout-steps > p.active{
    border-bottom: 0.2rem solid ${defaultTheme.Colors.primary[5]};
    color: ${defaultTheme.Colors.primary[5]};
  }

  @media screen and (max-width: 600px) {
    .checkout-steps > p{
      font-size: ${defaultTheme.fontSize.desktop.fz2}px;
      margin: ${defaultTheme.spaceMP[0]}px ${defaultTheme.spaceMP[5]}px;
    }
  }
`;