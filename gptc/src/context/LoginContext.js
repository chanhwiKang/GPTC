import { createContext, useContext, useEffect, useState } from 'react';

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null); // { name, email }
  const [loginData, setLoginData] = useState({
    memberEmail: '',
    memberPw: '',
  });

  useEffect(() => {
    const storedUser = localStorage.getItem('userInfo');
    if (storedUser) {
      setUserInfo(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
  }, []);

  const login = (info) => {
    localStorage.setItem('userInfo', JSON.stringify(info));
    setUserInfo(info);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem('userInfo');
    setUserInfo(null);
    setIsLoggedIn(false);
  };

  return (
    <LoginContext.Provider value={{ 
      isLoggedIn, 
      userInfo, 
      login, 
      logout,
      loginData, 
      setLoginData,
      }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);