import defaultTheme from "../theme/defaultTheme";
import styled from "styled-components";

export const IStyledSignin = styled.div`
    .signin-container{
        height: 100vh;
    }
    
    .signin-col{
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    form{
        box-shadow: 0 0 10px ${defaultTheme.Colors.grayScale[12]};
        padding: ${defaultTheme.spaceMP[5]}px ${defaultTheme.spaceMP[3]}px;
        border-radius: ${defaultTheme.borderRadius[3]}px;
    }
    
    form h2{
        text-align: center;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        margin-bottom: ${defaultTheme.spaceMP[10]}px;
    }
    
    .form-group{
        margin-bottom: ${defaultTheme.spaceMP[10]}px;
        display: flex;
        flex-direction: column;
    }
    
    label{
        margin-bottom: ${defaultTheme.spaceMP[1]}px;
        letter-spacing: 1.3px;
    }
    
    input{
        width: 300px;
        height: 40px;
        border: none;
        outline: none;
        border-bottom: 1px solid ${defaultTheme.Colors.grayScale[12]};
        padding: 5px 15px;
        background-color: transparent;
    }
    
    .form-group:nth-child(4){
        margin-top: ${defaultTheme.spaceMP[25]}px;
    }
    
    .form-group button{
        background-color: ${defaultTheme.Colors.grayScale[12]};
        color: ${defaultTheme.Colors.grayScale[0]};
        letter-spacing: 1.5px;
        transition: all 0.5s;
    }
    
    .form-group button:hover{
        background-color: ${defaultTheme.Colors.primary[4]};
    }
    
    .form-group a {
        color: ${defaultTheme.Colors.grayScale[12]};
        text-align: end;
        letter-spacing: 1.2px;
        margin-top: ${defaultTheme.spaceMP[13]}px;
    }
    
    .form-group a:hover{
        text-decoration: underline;
    }
`;