import React from 'react';
import ReactDOM from 'react-dom/client';

// Tailwind base + utilities
import './index.css';

// Optional extra user-defined CSS (styles.css in the project root)
import '../styles.css';

import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
