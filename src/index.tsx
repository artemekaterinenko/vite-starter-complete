import '@/index.css'
import '@/i18n'

import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { App } from '@/App'
import { initBrowserMocks } from '@/mocks/initBrowserMocks'

initBrowserMocks()

const rootElement = document.getElementById('root')

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  )
}
