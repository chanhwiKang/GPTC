import DefaultButton from '../components/DefaultButton';
import BackBoard from '../layouts/BackBoard';
import '../styles/form-element.css';
import InputForm from '../components/InputForm';

function SignUpForm2() {
  return (
    <BackBoard>
      <div>
        <div className="title">회원가입</div>

        <div className="input-div">
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
          <div className="pt-[30px] terms-of-use flex justify-center text-center">
            이용약관 및 개인정보처리방침
          </div>
          <div className="pt-[25px]">
            <DefaultButton
              text="동의하고 시작하기"
              styleClass=""
              isEnabled={true}
            />
          </div>
        </div>
      </div>
    </BackBoard>
  );
}

export default SignUpForm2;
