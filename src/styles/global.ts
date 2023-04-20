import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
  }

  html, body {
    font-size: 100%;
    text-rendering: optimizeSpeed;
    font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  *::after, *::before {
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  html, body  {
    height: 100%;
  }
`;
