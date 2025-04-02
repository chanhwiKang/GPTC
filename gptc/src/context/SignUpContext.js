import { createContext, useState, useContext } from 'react';

// Context 생성
const SignUpContext = createContext();

export function SignUpProvider({ children }) {
  const [signUpData, setSignUpData] = useState({
    memberName: '',
    memberEmail: '',
    memberPw: '',
  });

  return (
    <SignUpContext.Provider value={{ signUpData, setSignUpData }}>
      {children}
    </SignUpContext.Provider>
  );
}

// Context 사용하기 위한 커스텀 훅
export function useSignUp() {
  return useContext(SignUpContext);
}
