import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Prevent some libraries from trying to polyfill fetch if it's already a getter
if (typeof window !== 'undefined' && !('fetch' in window)) {
  console.warn('Fetch is missing from window');
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
