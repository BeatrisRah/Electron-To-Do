import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='m-auto h-10/12 w-9/12'>
      <App />
    </div>
  </StrictMode>,
)
