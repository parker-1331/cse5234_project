import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
// import "bootstrap/dist/css/bootstrap.min.css";
import './scss/custom.scss';
import * as bootstrap from 'bootstrap';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
