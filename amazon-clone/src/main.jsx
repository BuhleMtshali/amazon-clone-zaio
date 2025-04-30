import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
// import { AuthContextProvider } from './context/authContext.jsx';
import { ShoppingState } from './context/shopping/ShoppingState.jsx';
import reducer, { initialState } from './components/StateProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* <AuthContextProvider> */}
        <ShoppingState>
        <App />
        </ShoppingState>
      {/* </AuthContextProvider> */}
    </BrowserRouter>
  </StrictMode>,
)
