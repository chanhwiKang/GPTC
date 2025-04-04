import '../../styles/input.css';

function DefaultInput({ type, className = '', ...props }) {
  return (
    <input
      type={type === 'password' || type === 'password-re' ? 'password' : 'text'}
      className={`input-default ${className}`}
      {...props}
    />
  );
}

export default DefaultInput;
