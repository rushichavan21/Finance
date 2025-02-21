import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react';
import { RecoilRoot } from 'recoil'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Auth0Provider
    domain="dev-yeapdbii33xvny2x.us.auth0.com"
    clientId="3jp45wobFAyFIqSYwMcQ25YR4Bon0LhD"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
    <RecoilRoot>
    <App />
    </RecoilRoot>
    </Auth0Provider>
    </BrowserRouter>
  </StrictMode>,
)
