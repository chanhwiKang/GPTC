import { useState } from 'react';
import '../../styles/form-element.css';
function AccordionMenu({ studyName, index, activeIndex, setActiveIndex, children }) {
  const isActive = activeIndex === index;

  const toggleMenu = () => {
    setActiveIndex(isActive ? null : index);
  };

  return (
    <div className={`nav-title ${isActive ? 'active' : ''}`}>
      <div>
        <button onClick={toggleMenu} className="w-full h-full text-left">
          {studyName}
        </button>
      </div>
      <div
        className={`
          overflow-hidden transition-all duration-500 ease-in-out pl-[10%]
          ${isActive ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        {children}
      </div>
    </div>
  );
}
export default AccordionMenu;
