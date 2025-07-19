import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Pastikan ReactDOM.createRoot hanya dipanggil satu kali
const root = ReactDOM.createRoot(document.getElementById('root'));

// Pastikan App hanya dirender satu kali di dalam root.render
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
