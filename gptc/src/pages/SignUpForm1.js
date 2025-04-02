import { useState } from 'react';
import DefaultButton from '../components/DefaultButton';
import BackBoard from '../layouts/BackBoard';
import '../styles/form-element.css';
import '../styles/layouts.css';
import InputForm from '../components/InputForm';
import { registerUser } from '../services/api';

function SignUpForm1() {
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isNameValid, setIsNameValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isSamePassword, setIsSamePassword] = useState(false);
  const [password, setPassword] = useState('');

  const [formData, setFormData] = useState({
    memberName: '',
    memberEmail: '',
    memberPw: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser(formData); // Spring Boot 백엔드로 요청
      setMessage('회원가입 성공!');
      alert('회원가입 성공:', response?.data);
    } catch (error) {
      alert('회원가입 실패:', error);
      setMessage(
        '회원가입 실패: ' + (error.response?.data?.message || '서버 오류')
      );
    }
  };

  return (
    <BackBoard>
      <form onSubmit={handleSubmit}>
        <div className="title">회원가입</div>

        <div className="input-div">
          <div>
            <InputForm
              type="email"
              onStatusChange={setIsEmailValid}
              isValidationRequired={true}
              onChange={handleChange}
              name="memberEmail"
            />
          </div>
          <div className="pt-[15px]">
            <InputForm
              type="name"
              onStatusChange={setIsNameValid}
              isValidationRequired={true}
              onChange={handleChange}
              name="memberName"
            />
          </div>
          <div className="pt-[15px]">
            <InputForm
              type="password"
              onStatusChange={setIsPasswordValid}
              setPassword={setPassword}
              value={password}
              isValidationRequired={true}
              onChange={handleChange}
              name="memberPw"
            />
          </div>
          <div className="pt-[15px]">
            <InputForm
              type="password-re"
              onStatusChange={setIsSamePassword}
              password={password}
              isValidationRequired={true}
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
            type="submit"
          />
        </div>
      </form>
      {message && <p>{message}</p>}
    </BackBoard>
  );
}

export default SignUpForm1;
