import StudyBtns from './StudyBtns';

function ContentTopNav({ setActiveContent, activeContent }) {
  return (
    <div
      className=" 
    2xl:w-[560px] xl:w-[400px]
    2xl:h-[100px] xl:h-[100px]
    xl:mb-[70px]"
    >
      <div
        className="
      2xl:text-[32px] xl:text-[28px]
      2xl:w-[315px] 
      2xl:h-[84px]
      flex items-center
      2xl:mb-[26px] xl:mb-[20px]"
      >
        나중에 입력받기
      </div>
      <StudyBtns
        setActiveContent={setActiveContent}
        activeContent={activeContent}
      />
    </div>
  );
}

export default ContentTopNav;
