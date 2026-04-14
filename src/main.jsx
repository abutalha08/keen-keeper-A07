import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h2 className='font-bold text-red-600 bg-amber-300'>Hello</h2>
  </StrictMode>,
)
