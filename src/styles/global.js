import { createGlobalStyle } from 'styled-components'; 


export default createGlobalStyle`
    :root {
        --background: #F2F3F5;
        --gray-line:#dcdde0;
        --text:#666666;
        --white:#fff;
        --black:#000;
        --green-ligth:#51C5B0;
        --blue-ligth:#A4BBDD;
        --grey-ligth:#6D6969;
        --red-tomato: #ff6347;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }



    /* @media(max-width: 1080px){
        html{
        font-size: 93.75; 
        }

    }

    @media(max-width: 720px){
        html{
        font-size: 87.5; 
        }

    }

    body{
        background: var(--background);
        color: var(--text);    
    }

    body, input, textarea, button{
        font: 400 1rem "Inter", sans-serif;
    }

    button{
        cursor: pointer;
    }

    a{
        color: inherit;
        text-decoration: none;
    } */
`;