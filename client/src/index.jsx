import App from './app';
import React from 'react';
import ReactDOM from 'react-dom';
import '@/static/style/reset.css';
import '@/static/style/index.css';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
