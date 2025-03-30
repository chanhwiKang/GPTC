import '../styles/layouts.css';

function BackBoard({ styleClass, children }) {
  return (
    <div className={`backBoard ${styleClass}`}>
      <div
        className="
        flex items-center
        justify-center
        "
      >
        {children}
      </div>
    </div>
  );
}

export default BackBoard;
