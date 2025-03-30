import '../styles/layouts.css';

function BackBoard({ styleClass, children }) {
  return (
    <div className={`backBoard ${styleClass}`}>
      <div>{children}</div>
    </div>
  );
}

export default BackBoard;
