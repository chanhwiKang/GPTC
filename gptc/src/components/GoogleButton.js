import '../styles/buttons.css';

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
          className="w-[54px] h-[55px] ml-[10px]"
        />

        {/* 버튼 중앙에 오는 텍스트 */}
        <span className="absolute left-1/2 transform -translate-x-1/2 text-[24px]">
          {text}
        </span>
      </button>
    </div>
  );
}

export default GoogleButton;
