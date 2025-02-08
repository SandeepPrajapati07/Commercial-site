import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "@fontsource/montserrat"; // Default weight 400
import "@fontsource/montserrat/300.css"; // Lighter weight
import "@fontsource/montserrat/700.css"; // Bolder weight

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
