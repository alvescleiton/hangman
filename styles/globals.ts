import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    font-family: Montserrat, Arial, Helvetica, sans-serif;
    font-size: 16px;
    font-weight: 400;
  }

  a {
    color: inherit;
    text-decoration: none;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`

export default GlobalStyle