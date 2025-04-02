import { useState } from 'react';
import DefaultButton from './DefaultButton';
import BackBoard from '../layouts/BackBoard';
import '../styles/form-element.css';
import InputForm from './InputForm';

function ChangePasswordForm() {
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isSamePassword, setIsSamePassword] = useState(false);
  const [password, setPassword] = useState('');
  return (
    <BackBoard>
      <div>
        <div className="title">비밀번호 변경</div>
        <div className="input-div">
          <div>
            <InputForm
              type="password"
              onStatusChange={setIsPasswordValid}
              setPassword={setPassword}
              value={password}
              isValidationRequired={true}
            />
          </div>
          <div className="pt-[30px]">
            <InputForm
              type="password-re"
              onStatusChange={setIsSamePassword}
              password={password}
              isValidationRequired={true}
            />
          </div>
        </div>
        <div className="pt-[225px]">
          <div>
            <DefaultButton
              text="비밀번호 변경"
              styleClass=""
              isEnabled={isPasswordValid && isSamePassword}
            />
          </div>
        </div>
      </div>
    </BackBoard>
  );
}

export default ChangePasswordForm;
