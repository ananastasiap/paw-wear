import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 20px 40px;
  font-family: 'Laila',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  @media screen and (max-width: 800px) {
    padding: 10px;
  }
}

code {
  font-family: 'Laila',
    sans-serif;
}

a {
  text-decoration: none;
  color: black;
}

* {
  box-sizing: border-box;
}
`;