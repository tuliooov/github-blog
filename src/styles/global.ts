import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
    font-size: 1rem;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme['link-500']};
  }

  ::-webkit-scrollbar {
    width: 6px;
    height: 0;
  }

  ::-webkit-scrollbar,
  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: #4d4d57;
  }

  ::-webkit-scrollbar,
  ::-webkit-scrollbar-track {
    background: transparent;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']};
  }

  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme['text-700']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem 'Roboto', sans-serif
  }
`
