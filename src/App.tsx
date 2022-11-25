import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { ContextProvider } from './contexts/UserContext'
import { GlobalStyle } from './css/global'
import { defaultTheme } from './css/themes/default'
import { Router } from './Router'

export function App() {
  return (
    <ContextProvider>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </ContextProvider>
  )
}
