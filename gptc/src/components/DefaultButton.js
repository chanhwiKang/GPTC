import '../styles/buttons.css';

function DefaultButton({ text, styleClass = '', isEnabled = true }) {
  return (
    <button
      className={`btn-default ${isEnabled ? '' : 'btn-disable'} ${styleClass}`}
      disabled={!isEnabled}
    >
      {text}
    </button>
  );
}

export default DefaultButton;
