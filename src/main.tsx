import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import App from './App.tsx'
import './index.css'

// Unregister stale service workers, then register fresh one
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.getRegistrations().then(registrations => {
      Promise.all(registrations.map(r => r.unregister())).then(() => {
        navigator.serviceWorker.register('/service-worker.js')
          .then(() => {})
          .catch(() => {});
      });
    });
  });
}

// Mount the app with StrictMode for better development experience and error catching
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
