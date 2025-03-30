import '../styles/layouts.css';

function TopNav({ styleClass, children }) {
  return (
    <div className={`top-nav ${styleClass}`}>
      <div>{children}</div>
    </div>
  );
}

export default TopNav;
