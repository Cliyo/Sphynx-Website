import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import './i18n'
import { GlobalStyle } from 'themes/globalStyle'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
)
