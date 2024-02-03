import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        font-size: 62.5%;
        box-sizing: border-box;
        overflow-x: hidden;
    }

    *, *::before, *::after {
        box-sizing: inherit;
    }

    body {
        font-family: 'League Spartan', sans-serif;
        margin: 0;
        padding: 0;
    }

    a, button {
        font-family: 'League Spartan', sans-serif;
    }
    
    a {
      color: ${({ theme }) => theme.colors.primaryBlue};
    }
    
`;
