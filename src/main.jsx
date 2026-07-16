import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Light from './Light.jsx'
import './styles.css'

const path = window.location.pathname

let page = <App />
if (path.startsWith('/new_button')) page = <Light variant="buttons" />
else if (path.startsWith('/light')) page = <Light />

// красим статус-бар/оверскролл Safari под тему страницы
const isLightTheme = path.startsWith('/light') || path.startsWith('/new_button')
const topColor = isLightTheme ? '#e0e6ef' : '#01060f'
document.querySelector('meta[name="theme-color"]')?.setAttribute('content', topColor)
document.documentElement.style.setProperty('--overscroll-top', topColor)
if (isLightTheme) document.documentElement.style.setProperty('--bg-page', '#f5f7fa')

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>{page}</React.StrictMode>,
)
