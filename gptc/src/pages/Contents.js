import '../styles/input.css';
import '../styles/buttons.css';
import ExamContent from '../components/composite_cpnt/ExamContent';
import UnfinishedContent from '../components/composite_cpnt/UnfinishedContent';
import { useState } from 'react';
import StudyHead from '../components/atomic_cpnt/StudyHead';
import StudyBtns from '../components/composite_cpnt/StudyBtns';
import PdfForm from './PdfForm';
function Contents() {
  const [activeContent, setActiveContent] = useState('시험');
  const renderContent = () => {
    switch (activeContent) {
      case '시험':
        return <ExamContent />;
      case '교안':
        return <PdfForm />;
      default:
        return <UnfinishedContent />;
    }
  };
  return (
    <div
      className="
    2xl:w-[1500px] xl:w-[1100px] 
    h-auto
    2xl:mb-[100px] xl:mb-[50px]
    flex flex-col justify-start"
    >
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
      {renderContent()}
    </div>
  );
}

export default Contents;
