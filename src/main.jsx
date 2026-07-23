import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Light from './Light.jsx'
import Settings from './Settings.jsx'
import './styles.css'

const path = window.location.pathname

// основная версия — /new_button (кнопки под балансом), она же на "/"
// /dark — прежняя тёмная главная (App.jsx), /light — светлая без кнопок
let page = <Light variant="buttons" />
if (path.startsWith('/dark')) page = <App />
else if (path.startsWith('/light')) page = <Light />
else if (path.startsWith('/settings')) page = <Settings />

// красим статус-бар/оверскролл Safari под тему страницы
const isSettings = path.startsWith('/settings')
const isLightTheme = !path.startsWith('/dark') && !isSettings
const topColor = isSettings ? '#f2f5f9' : isLightTheme ? '#e0e6ef' : '#01060f'
document.querySelector('meta[name="theme-color"]')?.setAttribute('content', topColor)
document.documentElement.style.setProperty('--overscroll-top', topColor)
if (isLightTheme) document.documentElement.style.setProperty('--bg-page', '#f5f7fa')
// Safari красит область статус-бара по фону body — задаём цвет шапки,
// сам фон страницы рисует .app поверх
document.body.style.backgroundColor = topColor

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>{page}</React.StrictMode>,
)
