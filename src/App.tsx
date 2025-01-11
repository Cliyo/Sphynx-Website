import { ThemeProvider } from 'styled-components'

import { theme } from 'themes'
import { RouteApp } from 'Routes'
import { AlertContextProvider } from 'contexts/AlertContext'
import { AuthContextProvider } from 'contexts/AuthContext'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AlertContextProvider>
        <AuthContextProvider>
          <RouteApp />
        </AuthContextProvider>
      </AlertContextProvider>
    </ThemeProvider>
  )
}

export default App
