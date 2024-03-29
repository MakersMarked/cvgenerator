import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import NavBar from './components/NavBar'
import './Styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <App />
  </React.StrictMode>,
)
