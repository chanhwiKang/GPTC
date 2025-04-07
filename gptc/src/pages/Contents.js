import ContentTopNav from '../components/composite_cpnt/ContentTopNav';
import '../styles/input.css';
import '../styles/buttons.css';
import ExamContent from '../components/composite_cpnt/ExamContent';
import UnfinishedContent from '../components/composite_cpnt/UnfinishedContent';
import { useState } from 'react';
function Contents() {
  const [activeContent, setActiveContent] = useState('시험');
  const renderContent = () => {
    switch (activeContent) {
      case '시험':
        return <ExamContent />;
      default:
        return <UnfinishedContent />;
    }
  };
  return (
    <div
      className="
    2xl:w-[1443px] xl:w-[1100px] 
    h-auto
    2xl:mb-[100px] xl:mb-[50px]
    flex flex-col justify-start"
    >
      <ContentTopNav
        setActiveContent={setActiveContent}
        activeContent={activeContent}
      />
      {renderContent()}
    </div>
  );
}

export default Contents;
