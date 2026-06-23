import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import Loader from './assets/Components/Loader/Loader.jsx'


createRoot(document.getElementById('root')).render(
   <BrowserRouter>
  <StrictMode>
    <Loader/>
    <AppRouter/>
  </StrictMode>
  </BrowserRouter>  
)
