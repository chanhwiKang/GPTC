import '../styles/input.css';

function DefaultInput({ placeholder, styleClass }) {
  return (
    <input
      type="text"
      className={`input-default ${styleClass}`}
      placeholder={placeholder}
    />
  );
}

export default DefaultInput;
