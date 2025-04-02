import DefaultButton from '../components/DefaultButton';
import BackBoard from '../layouts/BackBoard';
import '../styles/form-element.css';
import InputForm from '../components/InputForm';
import { useNavigate } from 'react-router-dom';
import { useSignUp } from '../context/SignUpContext';
import { useState } from 'react';
import { registerUser } from '../services/api';

function SignUpForm2() {
  const navigate = useNavigate();
  const { signUpData } = useSignUp();
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('📌 전송할 회원가입 데이터:', signUpData); // ✅ 백엔드로 보낼 데이터 확인

    try {
      const response = await registerUser(signUpData);
      setMessage('회원가입 성공!');
      alert('회원가입 성공:', response?.data);
      console.log(response?.data);
      // navigate('/login') // 회원가입후 로그인 페이지 이동
    } catch (error) {
      alert('회원가입 실패:', error);
      setMessage(
        '회원가입 실패: ' + (error.response?.data?.message || '서버 오류')
      );
    }
  };

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
              text="30:00 / 인증번호 전송"
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
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </BackBoard>
  );
}

export default SignUpForm2;
