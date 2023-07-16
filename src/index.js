import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import * as serviceWorkerRegistration from './services/serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// serviceWorkerRegistration.unregister();
serviceWorkerRegistration.register();

// serviceWorkerRegistration.register({
//   onUpdate: (registration) => {
//     // Ocorre quando um novo service worker é instalado

//     // Verifica se há atualização disponível
//     if (registration && registration.waiting) {
//       // Prompt the user to update the app
//       if (window.confirm('Uma nova versão do aplicativo está disponível. Deseja atualizar?')) {
//         // Atualiza o service worker
//         registration.waiting.postMessage({ type: 'SKIP_WAITING' });
//       }
//     }
//   },
// });