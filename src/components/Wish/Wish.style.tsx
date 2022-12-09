import defaultTheme from "../theme/defaultTheme";
import styled from "styled-components";

export const IStyledWish = styled.div`
.wish-container{
  min-height: 100vh;
  padding: ${defaultTheme.spaceMP[15]}px ${defaultTheme.spaceMP[5]}px;
}

.wish-row:first-child{
  margin-bottom: ${defaultTheme.spaceMP[20]}px;
}

.wish-title{
  text-align: center;
  letter-spacing: 3px;
}

.wish-cards{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.wish-card{
  width: 150px;
  box-shadow:  0 0 5px ${defaultTheme.Colors.grayScale[12]};
  margin: ${defaultTheme.spaceMP[0]}px ${defaultTheme.spaceMP[13]}px ${defaultTheme.spaceMP[13]}px ${defaultTheme.spaceMP[0]}px;
  border-radius: ${defaultTheme.borderRadius[3]}px;
}

.wish-header img{
  width: 100%;
}

.wish-body{
  margin: ${defaultTheme.spaceMP[5]}px ${defaultTheme.spaceMP[0]}px;
  text-align: center;
}

.wish-body a{
  display: flex;
  justify-content: center;
  letter-spacing: 1.2px;
  margin-bottom: ${defaultTheme.spaceMP[3]}px;
}

.wish-body .wish-quantity{
  background-color: ${defaultTheme.Colors.grayScale[12]};
  padding: ${defaultTheme.spaceMP[3]}px ${defaultTheme.spaceMP[5]}px;
  color: ${defaultTheme.Colors.grayScale[0]};
  font-size: ${defaultTheme.fontSize.desktop.fz1}px;
  border-radius: ${defaultTheme.borderRadius[1]}px;
}

.buttons{
  display: flex;
}

.wish-body .buttons button{
  background-color: transparent;
  font-size: ${defaultTheme.fontSize.desktop.fz5}px;
}

.wish-footer{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: ${defaultTheme.spaceMP[10]}px ${defaultTheme.spaceMP[0]}px ${defaultTheme.spaceMP[5]}px ${defaultTheme.spaceMP[0]}px;
}

.wish-footer .wish-price{
  letter-spacing: 1.3px;
  font-weight: bold;
}

.wish-footer button{
  background-color: transparent;
  color: ${defaultTheme.Colors.primary[4]};
  font-size: ${defaultTheme.fontSize.desktop.fz5}px;
  padding: unset;
}
`;