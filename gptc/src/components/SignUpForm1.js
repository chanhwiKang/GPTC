import { useState } from 'react';
import DefaultButton from './DefaultButton';
import BackBoard from '../layouts/BackBoard';
import '../styles/form-element.css';
import '../styles/layouts.css';
import InputForm from './InputForm';

function SignUpForm1() {
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isNameValid, setIsNameValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isSamePassword, setIsSamePassword] = useState(false);
  const [password, setPassword] = useState('');

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
            />
          </div>
          <div className="pt-[15px]">
            <InputForm
              type="name"
              onStatusChange={setIsNameValid}
              isValidationRequired={true}
            />
          </div>
          <div className="pt-[15px]">
            <InputForm
              type="password"
              onStatusChange={setIsPasswordValid}
              setPassword={setPassword}
              value={password}
              isValidationRequired={true}
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
          />
        </div>
      </div>
    </BackBoard>
  );
}

export default SignUpForm1;
