import { useState } from 'react';
import { useEffect } from 'react';
import DefaultButton from '../components/atomic_cpnt/DefaultButton';
import BackBoard from '../layouts/BackBoard';
import '../styles/form-element.css';
import '../styles/layouts.css';
import InputForm from '../components/composite_cpnt/InputForm';
import { useSignUp } from '../context/SignUpContext';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../services/api';
import { useLogin } from '../context/LoginContext';

function SignUpForm1() {
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isNameValid, setIsNameValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isSamePassword, setIsSamePassword] = useState(false);
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { signUpData, setSignUpData } = useSignUp();
  const { isLoggedIn } = useLogin();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('📌 전송할 회원가입 데이터:', signUpData); //백엔드로 보낼 데이터 확인

    try {
      const response = await registerUser(signUpData);
      alert('회원가입 성공:' + response);
      console.log(response?.data);
      navigate('/email-verification'); // 이메일인증페이지 이동
    } catch (error) {
      alert('회원가입 실패:', error);
    }
  };

  return (
    <BackBoard>
      <div>
        <div className="title">회원가입</div>

        <div className="input-div">
          <div>
            <InputForm
              type="email"
              onStatusChange={setIsEmailValid}
              isValidationRequired={true}
              name="memberEmail"
              onChange={handleChange}
              value={signUpData.memberEmail}
            />
          </div>
          <div className="pt-[15px]">
            <InputForm
              type="name"
              onStatusChange={setIsNameValid}
              isValidationRequired={true}
              name="memberName"
              onChange={handleChange}
              value={signUpData.memberName}
            />
          </div>
          <div className="pt-[15px]">
            <InputForm
              type="password"
              onStatusChange={setIsPasswordValid}
              setPassword={setPassword}
              password={signUpData.memberPw}
              isValidationRequired={true}
              name="memberPw"
              onChange={handleChange}
            />
          </div>
          <div className="pt-[15px]">
            <InputForm
              type="password-re"
              onStatusChange={setIsSamePassword}
              password={password}
              isValidationRequired={true}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="pt-[40px]">
          <DefaultButton
            text="다음"
            styleClass=""
            isEnabled={
              isEmailValid && isNameValid && isPasswordValid && isSamePassword
            }
            onClick={handleSubmit}
          />
        </div>
      </div>
    </BackBoard>
  );
}

export default SignUpForm1;
