import StudyHead from '../atomic_cpnt/StudyHead';
import StudyBtns from './StudyBtns';

function ContentTopNav({ setActiveContent, activeContent }) {
  return (
    <div
      className=" 
    2xl:w-[560px] xl:w-[400px]
    2xl:h-[100px] xl:h-[100px]
    xl:mb-[70px]"
    >
      <StudyHead />
      <StudyBtns
        setActiveContent={setActiveContent}
        activeContent={activeContent}
      />
    </div>
  );
}

export default ContentTopNav;
