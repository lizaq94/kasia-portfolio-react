import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    html {
        font-size: 62.5%;
        box-sizing: border-box;

        @media (max-width: 600px) {
            font-size: 31.25%;
        }
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
