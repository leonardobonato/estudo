import React from 'React'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import EstiloGlobal from './estiloGlobal.js'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <App />
      <EstiloGlobal />
    </>
  </React.StrictMode>,
)


