import { useState } from 'react';
import DefaultButton from '../components/atomic_cpnt/DefaultButton';
import BackBoard from '../layouts/BackBoard';
import '../styles/form-element.css';
import InputForm from '../components/composite_cpnt/InputForm';
import GoogleButton from '../components/atomic_cpnt/GoogleButton';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../context/LoginContext';
import { loginUser } from '../services/api';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function LoginForm() {
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { loginData, setLoginData, login } = useLogin();
  const { isLoggedIn } = useLogin();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(loginData);

      const userInfo = {
        email: response.email,
        name: response.name,
      };

      login(userInfo);

      alert('로그인 성공!');
      navigate('/');
    } catch (err) {
      alert('이메일 또는 비밀번호가 잘못되었습니다.');
    }
  };

  return (
    <BackBoard>
      <div>
        <div className="title">환영합니다!</div>
        <div className="input-div">
          <div>
            <InputForm
              type="email"
              onStatusChange={setIsEmailValid}
              isValidationRequired={true}
              name="memberEmail"
              onChange={handleChange}
              value={loginData.memberEmail}
            />
          </div>
          <div className="pt-[25px]">
            <InputForm
              type="password"
              onStatusChange={setIsPasswordValid}
              setPassword={setPassword}
              password={loginData.memberPw}
              isValidationRequired={true}
              name="memberPw"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="pt-[40px]">
          <DefaultButton
            text="로그인"
            styleClass=""
            isEnabled={isEmailValid && isPasswordValid}
            onClick={handleLogin}
          />
        </div>
        <div className="mt-[10px] mb-[10px] flex justify-center text-[20px] text-[#777777] w-full">
          <div
            className="
            w-[210px] xl:w-[150px]
            h-[40px] 
            flex text-center items-center justify-center"
          >
            <Link to="/signup" className="">
              회원가입
            </Link>
          </div>
          <div
            className="
            w-[210px] xl:w-[150px]
            h-[40px] 
            flex text-center items-center justify-center"
          >
            <Link to="/find-Pw">비밀번호 찾기</Link>
          </div>
        </div>
        <hr />
        <div className="pt-[40px]">
          <GoogleButton text="Google로 로그인" styleClass="" isEnabled={true} />
        </div>
      </div>
    </BackBoard>
  );
}

export default LoginForm;
