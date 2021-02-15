import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    /* @import url('https://fonts.googleapis.com/css?family=Montserrat:300,600&display=swap'); */

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    *, *::before, *::after{
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html{
        font-size: 62.5%;
        scroll-behavior: smooth;
    }

    body{
        font-size: 1.6rem;
        /* font-family: 'Montserrat', sans-serif; */
    }

`;

export default GlobalStyle;
