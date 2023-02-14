import { useState } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import { defaultTheme, themeBlack, themeWhite } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Routes'
import { GlobalStyle } from './styles/global'

function App() {
  const [color, setColor] = useState<'black' | 'white'>('black')
  const themeColor = color === 'white' ? { ...themeWhite } : { ...themeBlack }
  const theme = { ...defaultTheme, ...themeColor } as DefaultTheme

  const handleChangeTheme = () => {
    setColor((color) => (color === 'white' ? 'black' : 'white'))
  }

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
