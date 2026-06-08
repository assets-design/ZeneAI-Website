import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { markIosTouchDocument } from '@/lib/iosTouch'
import './styles/tokens.css'
import './styles/global.css'
import './styles/section-scroll.css'
import App from './App.tsx'

markIosTouchDocument()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
