import DefaultButton from './DefaultButton';
import BackBoard from '../layouts/BackBoard';
import '../styles/form-element.css';
import InputForm from './InputForm';

function LoginForm() {
  return (
    <BackBoard>
      <div>
        <div
          className="
        title
        flex items-center
        justify-center
        pt-[70px]
        "
        >
          비밀번호 찾기
        </div>
        <div className="pt-[55px]">
          <div>
            <InputForm type="email" isValidationRequired={false} />
          </div>
          <div className="pt-[40px]">
            <DefaultButton
              text="3:00 / 인증번호 전송"
              styleClass=""
              isEnabled={true}
            />
          </div>
        </div>
        <div className="pt-[40px]">
          <div>
            <InputForm type="Authentication" isValidationRequired={false} />
          </div>
          <div className="pt-[95px]">
            <DefaultButton text="다음" styleClass="" isEnabled={true} />
          </div>
        </div>
      </div>
    </BackBoard>
  );
}

export default LoginForm;
