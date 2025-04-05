import DefaultButton from '../components/DefaultButton';
import BackBoard from '../../layouts/BackBoard';
import '../styles/form-element.css';
import InputForm from '../components/InputForm';
import { useLogin } from '../../context/LoginContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function FindPasswordForm() {
    const { isLoggedIn } = useLogin();
    const navigate = useNavigate();
    
    useEffect(() => {
      if (isLoggedIn) {
        navigate('/');
      }
    }, [isLoggedIn, navigate]);

  return (
    <BackBoard>
      <div>
        <div className="title">비밀번호 찾기</div>
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
          <div className="pt-[95px]">
            <DefaultButton text="다음" styleClass="" isEnabled={true} />
          </div>
        </div>
      </div>
    </BackBoard>
  );
}

export default FindPasswordForm;
