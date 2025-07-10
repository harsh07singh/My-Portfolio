import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './i18n';

import { LanguageProvider } from './context/LanguageContext';
import { BrowserRouter } from 'react-router-dom'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <LanguageProvider>
          <App />
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>
);
