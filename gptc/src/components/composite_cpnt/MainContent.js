import '../../styles/layouts.css';
import MainBackBoard from '../../layouts/MainBackBoard';

function MainContent() {
  return (
    <MainBackBoard>
      <div>
        <div className="flex flex-row justify-center">
          <img
            src="/assets/pdfIcon.png"
            alt="googleImg"
            className="h-[200px] w-[200px]"
          ></img>
          <span className="flex items-center text-[300%] text-[#0793f7] font-bold">
            + 파일 추가
          </span>
        </div>
        <div className="flex justify-center text-center text-[300%] font-bold mt-[7%]">
          클릭 한 번으로 PDF를 업로드하고
          <br /> 나만의 학습을 생성해보세요!
        </div>
      </div>
    </MainBackBoard>
  );
}

export default MainContent;
