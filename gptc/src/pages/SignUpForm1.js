import { useState } from 'react';
import DefaultButton from '../components/DefaultButton';
import BackBoard from '../layouts/BackBoard';
import '../styles/form-element.css';
import '../styles/layouts.css';
import InputForm from '../components/InputForm';
import { useNavigate } from 'react-router-dom';
import { useSignUp } from '../context/SignUpContext';

function SignUpForm1() {
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isNameValid, setIsNameValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isSamePassword, setIsSamePassword] = useState(false);
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { signUpData, setSignUpData } = useSignUp();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
            onClick={() => navigate('/signup2')}
          />
        </div>
      </div>
    </BackBoard>
  );
}

export default SignUpForm1;
