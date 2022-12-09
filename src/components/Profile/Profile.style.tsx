import defaultTheme from "../theme/defaultTheme";
import styled from "styled-components";

export const IStyledProfile = styled.div`
  .profile-container{
    min-height: 100vh;
  }

  form .acount-back{
    display: flex;
    justify-content: end;
    margin-top: ${defaultTheme.spaceMP[8]}px;
  }

  form .acount-back a {
    color: ${defaultTheme.Colors.grayScale[12]};
    text-align: right;
    letter-spacing: 1.4px;
  }

  form .acount-back a:hover{
    color: ${defaultTheme.Colors.primary[4]};
  }

  form .acount-back a svg{
    font-size: ${defaultTheme.fontSize.desktop.fz4}px;
  }
`;