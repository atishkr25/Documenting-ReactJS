import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ComponentA from './ComponentA'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ComponentA />
  </StrictMode>,
)
