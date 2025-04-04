import '../../styles/buttons.css';
import '../../styles/imgs.css';
import '../../styles/layouts.css';
function GoogleButton({ text, styleClass = '', isEnabled }) {
  return (
    <div>
      <button
        className={`btn-google ${styleClass} relative flex items-center`}
        disabled={!isEnabled}
      >
        {/* 기존 위치의 이미지 */}
        <img
          src="/assets/googleIcon.png"
          alt="googleImg"
          className="img-google"
        />

        {/* 버튼 중앙에 오는 텍스트 */}
        <span className="txt-google">{text}</span>
      </button>
    </div>
  );
}

export default GoogleButton;
