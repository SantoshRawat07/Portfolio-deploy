import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

import Loader from './assets/Components/Loader/Loader.jsx'
import App from "./App.jsx";
import Navbarr from './assets/Components/Navbar/Navbarr.jsx'
import Footer from './assets/Components/Footer/footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Loader />
      <Navbarr/>
      <App />
      <Footer/>
    </BrowserRouter>
  </StrictMode>
)