import { createContext, useState, useContext } from 'react';

// Context 생성
const LoginContext = createContext();

export function LoginProvider({ children }) {
  const [loginData, setLoginData] = useState({
    memberEmail: '',
    memberPw: '',
  });

  return (
    <LoginContext.Provider value={{ loginData, setLoginData }}>
      {children}
    </LoginContext.Provider>
  );
}

// Context 사용하기 위한 커스텀 훅
export function useLogin() {
  return useContext(LoginContext);
}
