import '../styles/layouts.css';
import DefaultButton from '../components/DefaultButton';
function TopNav({ styleClass, isLogined = false }) {
  return (
    <div className={`top-nav ${styleClass}`}>
      <div className="flex gap-3">
        {isLogined ? null : (
          <>
            <DefaultButton styleClass="btn-login" text="로그인" />
            <DefaultButton styleClass="btn-signup" text="회원가입" />
          </>
        )}
      </div>
    </div>
  );
}

export default TopNav;
