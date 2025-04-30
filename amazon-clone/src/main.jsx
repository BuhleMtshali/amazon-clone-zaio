import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
// import { AuthContextProvider } from './context/authContext.jsx';
import { ShoppingState } from './context/shopping/ShoppingState.jsx';
import { StateProvider } from './components/StateProvider.jsx';
import reducer, { initialState } from './components/reducer.jsx';
// import reportWebVitals from './reportWebVitals';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* <AuthContextProvider> */}
        {/* <ShoppingState> */}
        <StateProvider initialState={initialState} reducer={reducer}>
          <App />
        </StateProvider>
        
        {/* </ShoppingState> */}
      {/* </AuthContextProvider> */}
    </BrowserRouter>
  </StrictMode>,
)
