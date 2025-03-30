import '../styles/buttons.css';

function DefaultButton({ text, styleClass = '', isEnabled }) {
  return (
    <button
      className={`btn-default ${isEnabled ? '' : 'btn-disable'}`}
      disabled={!isEnabled}
    >
      {text}
    </button>
  );
}

export default DefaultButton;
