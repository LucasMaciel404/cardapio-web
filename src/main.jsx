import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

import App from './App.jsx'
import Loading from './components/loading/index.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Loading />
  </StrictMode>,
)
