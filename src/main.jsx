import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { LanguageProvider } from './context/LanguageContext.jsx'
import { TransitionProvider } from './components/PageTransition.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <LanguageProvider>
        <TransitionProvider>
          <App />
        </TransitionProvider>
      </LanguageProvider>
    </HashRouter>
  </StrictMode>,
)
