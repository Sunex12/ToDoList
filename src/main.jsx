import React from 'react'
import ReactDOM from 'react-dom/client';
import './styles/global.scss';
import './styles/container.scss';
import './styles/nullStyles.scss';
import Index from './pages/Index';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
)
