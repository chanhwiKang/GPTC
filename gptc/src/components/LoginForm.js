import DefaultButton from './DefaultButton';
import BackBoard from '../layouts/BackBoard';
import '../styles/form-element.css';
import InputForm from './InputForm';
import GoogleButton from './GoogleButton';

function LoginForm() {
  return (
    <BackBoard>
      <div>
        <div className="title">환영합니다!</div>
        <div className="input-div">
          <div>
            <InputForm type="email" isValidationRequired={false} />
          </div>
          <div className="pt-[25px]">
            <InputForm type="password" isValidationRequired={false} />
          </div>
        </div>
        <div className="pt-[40px]">
          <DefaultButton text="로그인" styleClass="" isEnabled={true} />
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
