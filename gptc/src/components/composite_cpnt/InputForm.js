import DefaultInput from '../atomic_cpnt/DefaultInput';
import { useState } from 'react';
import {
  validateEmail,
  validateName,
  validatePw,
} from '../../utils/validators';
import inputConfig from '../../utils/inputConfig';

function InputForm({
  type,
  onStatusChange,
  isValidationRequired,
  name,
  onChange,
  value,
  password,
  setPassword,
}) {
  const [status, setStatus] = useState('n');

  const handleInputChange = (e) => {
    //유효성 검증
    const value = e.target.value;
    if (isValidationRequired) {
      if (type === 'email') {
        setStatus(validateEmail(value) ? 't' : 'f');
        onStatusChange(validateEmail(value));
      } else if (type === 'name') {
        setStatus(validateName(value) ? 't' : 'f');
        onStatusChange(validateName(value));
      } else if (type === 'password') {
        setPassword(value);
        setStatus(validatePw(value) ? 't' : 'f');
        onStatusChange(validatePw(value));
      } else if (type === 'password-re') {
        setStatus(value === password ? 't' : 'f');
        onStatusChange(value === password);
      }
    }
    onChange(e); // 상위 폼에서 작성된 onChage로 트리거된 함수
  };
  let config = inputConfig[type] || '';
  let title = config.title || '';
  let placeholder = config.placeholder || '';
  let statusMessage = config.messages?.[status] || '';
  let statusClass =
    status === 't' ? 'correct-msg' : status === 'f' ? 'error-msg' : '';

  return (
    <div>
      <div className="flex flex-row justify-between pl-[20px]">
        <div className="input-title">{title}</div>
        <div className={statusClass}>{statusMessage}</div>
      </div>
      <DefaultInput
        placeholder={placeholder}
        onChange={handleInputChange}
        value={value}
        type={type}
        name={name}
      />
    </div>
  );
}

export default InputForm;
