import '../styles/layouts.css';
import DefaultButton from '../components/atomic_cpnt/DefaultButton';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../context/LoginContext';

function TopNav({ styleClass}) {
  const navigate = useNavigate();
  const { isLoggedIn, userInfo, logout } = useLogin();

  return (
    <div className={`top-nav ${styleClass}`}>
      <div className="flex gap-3">
        {isLoggedIn ? (
          <>
            <span className="text-black pt-1">{userInfo?.name}님</span>
            <DefaultButton
              styleClass="btn-signup"
              text="로그아웃"
              onClick={() => {
                logout();
                navigate('/');
              }}
            />
          </>
        ) : (
          <>
            <DefaultButton
              styleClass="btn-login"
              text="로그인"
              onClick={() => navigate('/login')}
            />
            <DefaultButton
              styleClass="btn-signup"
              text="회원가입"
              onClick={() => navigate('/signup')}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default TopNav;
