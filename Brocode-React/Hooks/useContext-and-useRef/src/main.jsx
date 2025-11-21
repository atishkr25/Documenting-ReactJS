import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ComponentA from './ComponentA'
import ExOfuseRef from './ExOfuseRef'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ComponentA /> */}
    <ExOfuseRef/>
  </StrictMode>,
)
