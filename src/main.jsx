import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Light from './Light.jsx'
import './styles.css'

const isLight = window.location.pathname.startsWith('/light')

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {isLight ? <Light /> : <App />}
  </React.StrictMode>,
)
