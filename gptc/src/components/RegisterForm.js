import DefaultButton from './DefaultButton';
import InputForm from './InputForm';
import BackBoard from '../layouts/BackBoard';
import '../styles/form-element.css';

function RegisterForm() {
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
          회원가입
        </div>

        <div className="pt-[55px]">
          <InputForm
            title="Email"
            status="f"
            fMsg="올바른 E-mail이 아닙니다."
            tMsg="사용할 수 있는 E-mail입니다!"
            placeholder="이메일을 입력해주세요."
          />
        </div>
        <div>
          <DefaultButton text="11111" styleClass="" />
        </div>
      </div>
    </BackBoard>
  );
}

export default RegisterForm;
