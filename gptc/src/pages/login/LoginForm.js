import { useState } from 'react';
import DefaultButton from '../../components/atomic_cpnt/DefaultButton';
import BackBoard from '../../layouts/BackBoard';
import '../../styles/form-element.css';
import InputForm from '../../components/composite_cpnt/InputForm';
import GoogleButton from '../../components/atomic_cpnt/GoogleButton';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../../context/LoginContext';
import { loginUser } from '../../services/api';

function LoginForm() {
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { loginData, setLoginData } = useLogin();

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
      alert('로그인 성공!' + response);
      navigate('/');
    } catch (err) {
      alert('이메일 또는 비밀번호가 잘못되었습니다.' + err);
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
        <div className="pt-[40px]">
          <hr />
        </div>
        <div className="pt-[40px]">
          <GoogleButton text="Google로 로그인" styleClass="" isEnabled={true} />
        </div>
      </div>
    </BackBoard>
  );
}

export default LoginForm;
