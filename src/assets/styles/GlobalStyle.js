import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @import url('http://fonts.cdnfonts.com/css/sofia-pro?styles=17636,17634,17638,17628');

    html {
        font-size: 62.5%;
        box-sizing: border-box;
        overflow-x: hidden;
    }

    *, *::before, *::after {
        box-sizing: inherit;
    }

    body {
        font-family: 'Sofia Pro', sans-serif;
        margin: 0;
        padding: 0;
    }

    a, button {
        font-family: 'Sofia Pro', sans-serif;
    }
`;
