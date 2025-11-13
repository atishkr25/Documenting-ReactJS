import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import UseEffect from './Components/UseEffect.jsx'; // ✅ Fixed path
import ExOfUseEffect from './Components/ExOfUseEffect.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <UseEffect /> */}
    <ExOfUseEffect />
  </StrictMode>
);
