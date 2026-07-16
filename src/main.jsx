import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Light from './Light.jsx'
import './styles.css'

const path = window.location.pathname

let page = <App />
if (path.startsWith('/new_button')) page = <Light variant="buttons" />
else if (path.startsWith('/light')) page = <Light />

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>{page}</React.StrictMode>,
)
