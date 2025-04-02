import '../styles/layouts.css';

function MainBackBoard({ styleClass, children }) {
  return <div className={`main-back-board ${styleClass}`}>{children}</div>;
}

export default MainBackBoard;
