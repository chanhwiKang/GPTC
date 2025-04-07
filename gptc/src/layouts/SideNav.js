import { useStudies } from '../context/StudyContext';
import { useState } from 'react';
import { useEffect } from 'react';
import AccordionMenu from '../components/composite_cpnt/AccordionMenu';

function SideNav({ styleClass }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const { studies, fetchStudies } = useStudies();

  useEffect(() => {
    fetchStudies(); // 로그인 이후에도 이거 호출하면 갱신됨
  }, []);

  return (
    <div className={`side-nav ${styleClass}`}>
      <a
        href="/"
        className="
         text-[44px] font-bold
         text-[#5D5D5D]
         h-[9%] w-full
         flex items-center justify-center
         sticky top-0
         z-10 bg-[#F7F7F5]"
      >
        지피티쳐
      </a>
      {studies.map((study, i) => (
        <AccordionMenu
          key={study.studyNo}
          studyName={study.studyName}
          index={i}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      ))}
    </div>
  );
}

export default SideNav;
