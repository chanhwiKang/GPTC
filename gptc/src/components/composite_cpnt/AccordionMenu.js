import { useState } from 'react';
import '../../styles/form-element.css';
function AccordionMenu({ studyName, index, activeIndex, setActiveIndex }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setActiveIndex(index);
  };
  const isActive = activeIndex === index;
  return (
    <div className={`nav-title ${isActive && isOpen ? 'active' : ''}`}>
      <div>
        <button onClick={toggleMenu} className="w-full h-full text-left">
          {studyName}
        </button>
      </div>
      <div
        className={`
    overflow-hidden
    transition-all duration-7000 ease-in-out pl-[10%]
    ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
  `}
      >
        <div>
          <button className="w-full h-full text-left">11111</button>
        </div>
        <div>
          <button className="w-full h-full text-left">22222</button>
        </div>
      </div>
    </div>
  );
}
export default AccordionMenu;
