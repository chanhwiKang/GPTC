import '../styles/layouts.css';
import { useState } from 'react';
import AccordionMenu from '../components/composite_cpnt/AccordionMenu';
import { useNavigate } from 'react-router-dom';

function SideNav({ styleClass }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();

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
        z-10 bg-[#F7F7F5]
      "
      >
        지피티쳐
      </a>
      <AccordionMenu
        studyName="나중에입력받기"
        index={0}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        onClick={() => navigate('/contents-exam')}
      />
      <AccordionMenu
        studyName="나중에입력받기1"
        index={1}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      <AccordionMenu
        studyName="나중에입력받기2"
        index={2}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </div>
  );
}

export default SideNav;
