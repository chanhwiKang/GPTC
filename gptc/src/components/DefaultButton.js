import '../styles/buttons.css';

function DefaultButton({ text, styleClass = '', isEnabled = true, onClick }) {
  return (
    <button
      className={`btn-default ${isEnabled ? '' : 'btn-disable'} ${styleClass}`}
      disabled={!isEnabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default DefaultButton;
