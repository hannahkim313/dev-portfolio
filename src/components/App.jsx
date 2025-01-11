import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import Router from './Router';
import '../styles/app.css';

const App = () => (
  <StrictMode>
    <HelmetProvider>
      <Router />
    </HelmetProvider>
  </StrictMode>
);

createRoot(document.getElementById('root')).render(<App />);
