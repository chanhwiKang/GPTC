import '../styles/layouts.css';
import DefaultButton from '../components/atomic_cpnt/DefaultButton';
import { useNavigate } from 'react-router-dom';

function TopNav({ styleClass, isLogined = false }) {
  const navigate = useNavigate();
  return (
    <div className={`top-nav ${styleClass}`}>
      <div className="flex gap-3">
        {isLogined ? null : (
          <>
            <DefaultButton
              styleClass="btn-login"
              text="로그인"
              onClick={() => navigate('/login')}
            />
            <DefaultButton
              styleClass="btn-signup"
              text="회원가입"
              onClick={() => navigate('/signup1')}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default TopNav;
