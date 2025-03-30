import '../styles/layouts.css';

function SideNav({ styleClass, children }) {
  return (
    <div className={`side-nav ${styleClass}`}>
      <div
        className="
        text-[44px]
        font-bold
        text-[#5D5D5D]
        align-text-top
        self-start
      "
      >
        지피티처
      </div>
      <div>{children}</div>
    </div>
  );
}

export default SideNav;
