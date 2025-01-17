import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Auth0Provider } from '@auth0/auth0-react'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
   <Auth0Provider
    domain="dev-1hi0q3pzvr0f6qvh.us.auth0.com"
    clientId="3MMrzZqvSg219CmInfabB5PVLhud7uwf"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    
    <App />
  </Auth0Provider>
  </React.StrictMode>,
)
