import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { GlobalStyle } from './styles/global';
import { Modal } from './components/molecules';
import { ModalProvider } from './context/modal/ModalProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ModalProvider>
        <App />
        <GlobalStyle />
        <Modal />
      </ModalProvider>
    </BrowserRouter>
  </React.StrictMode>
);
