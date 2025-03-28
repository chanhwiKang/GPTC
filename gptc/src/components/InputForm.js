import DefaultInput from './DefaultInput';

function InputForm({ title, tMsg, fMsg, status, placeholder }) {
  let statusMessage = '';
  let statusClass = '';

  if (status === 't') {
    statusMessage = tMsg;
    statusClass = 'correct-msg';
  } else if (status === 'f') {
    statusMessage = fMsg;
    statusClass = 'error-msg';
  } else if (status === 'n') {
  }
  return (
    <div>
      <div className="flex flex-row">
        <div className="input-title">{title}</div>
        <div className={statusClass}>{statusMessage}</div>
      </div>
      <DefaultInput placeholder={placeholder}></DefaultInput>
    </div>
  );
}

export default InputForm;
