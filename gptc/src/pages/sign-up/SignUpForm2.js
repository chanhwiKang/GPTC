import DefaultButton from '../../components/atomic_cpnt/DefaultButton';
import BackBoard from '../../layouts/BackBoard';
import '../../styles/form-element.css';
import InputForm from '../../components/composite_cpnt/InputForm';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useSignUp } from '../../context/SignUpContext';
import { requestEmailVerification } from '../../services/api';
import { verifyEmailCode } from '../../services/api';

function SignUpForm2() {
  const navigate = useNavigate();
  const { signUpData } = useSignUp();
  const [isVerifyCodeSent, setIsVerifyCodeSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
  };

  const handleSendEmail = async (e) => {
    e.preventDefault();
    try {
      const response = await requestEmailVerification(
        signUpData.memberEmail,
        'SIGNUP'
      );
      alert('인증번호가 전송되었습니다.' + response);
      setIsVerifyCodeSent(true);
    } catch (error) {
      alert('인증번호 요청 실패!' + error);
    }
  };

  const handleVerifyCode = async (e) => {
    e.preventDefault();
    try {
      let code = document.querySelector('input[name="verifyCode"]')?.value;
      const response = await verifyEmailCode(
        signUpData.memberEmail,
        'SIGNUP',
        code
      );
      alert('인증 성공!' + response);
      navigate('/');
    } catch (error) {
      alert('인증 실패!' + error);
    }
  };

  return (
    <BackBoard>
      <div>
        <div className="title">이메일 인증</div>

        <div className="input-div">
          <div>
            <InputForm
              type="email"
              isValidationRequired={false}
              name="memberEmail"
              value={signUpData.memberEmail}
              readonly
            />
          </div>
          <div className="pt-[40px]">
            <DefaultButton
              text="60:00 / 인증번호 전송"
              styleClass=""
              isEnabled={!isVerifyCodeSent}
              onClick={handleSendEmail}
            />
          </div>
        </div>
        <div className="pt-[40px]">
          <div>
            <InputForm
              type="verifyCode"
              isValidationRequired={false}
              name="verifyCode"
              onChange={handleChange}
            />
          </div>
          <div className="pt-[30px]"></div>
          <div className="pt-[25px]">
            <DefaultButton
              text="동의하고 시작하기"
              styleClass=""
              isEnabled={isVerifyCodeSent}
              onClick={handleVerifyCode}
            />
          </div>
        </div>
      </div>
    </BackBoard>
  );
}

export default SignUpForm2;
