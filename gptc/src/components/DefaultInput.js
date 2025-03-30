import '../styles/input.css';

function DefaultInput({ placeholder, styleClass, onChange, value, type }) {
  return (
    <input
      type={type === 'password' || type === 'password-re' ? 'password' : 'text'}
      className={`input-default ${styleClass}`}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
}

export default DefaultInput;
