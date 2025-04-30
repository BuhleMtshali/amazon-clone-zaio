import { createContext, useState, useEffect } from 'react';

const AuthContext = createContext({ 
    isLoggedIn: false,
    // onLogout: () => {},
    // onLogin: (email, password) => {} 

});


//  const AuthContextProvider = (props) => {
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
    
//       useEffect(() => {
//         const userInfo = localStorage.getItem('isLoggedIn');
    
//         if(userInfo === '1'){
//           setIsLoggedIn(true)
//         }
//       }, []);
    
//       const loginHandler = (email, password) => {
//         localStorage.setItem('isLoggedIn', '1');
//         setIsLoggedIn(true);
//       }
    
//       const logoutHandler = () => {
//         localStorage.removeItem('isLoggedIn');
//         setIsLoggedIn(false);
//       }
// }

export default AuthContext;