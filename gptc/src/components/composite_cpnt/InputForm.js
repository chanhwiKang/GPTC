import DefaultInput from '../atomic_cpnt/DefaultInput';
import { useState } from 'react';
import {
  validateEmail,
  validateName,
  validatePw,
} from '../../utils/validators';

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

  let title = '';
  let placeholder = '';
  let statusMessage = '';
  let statusClass = '';

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
  if (type === 'email') {
    title = 'Email';
    placeholder = '이메일을 입력해주세요.';
    if (status === 't') {
      statusMessage = '사용할 수 있는 E-mail입니다!';
      statusClass = 'correct-msg';
    } else if (status === 'f') {
      statusMessage = '올바른 E-mail이 아닙니다.';
      statusClass = 'error-msg';
    } else if (status === 'n') {
    }
  } else if (type === 'name') {
    title = '이름';
    placeholder = '이름을 입력해주세요.';
    if (status === 't') {
      statusMessage = '사용할 수 있는 이름입니다!';
      statusClass = 'correct-msg';
    } else if (status === 'f') {
      statusMessage = '올바른 이름이 아닙니다.';
      statusClass = 'error-msg';
    } else if (status === 'n') {
    }
  } else if (type === 'password') {
    title = '비밀번호';
    placeholder = '비밀번호를 입력해주세요.';
    if (status === 't') {
      statusMessage = '사용할 수 있는 비밀번호입니다!';
      statusClass = 'correct-msg';
    } else if (status === 'f') {
      statusMessage = '올바른 비밀번호가 아닙니다.';
      statusClass = 'error-msg';
    } else if (status === 'n') {
    }
  } else if (type === 'password-re') {
    title = '비밀번호 확인';
    placeholder = '비밀번호를 다시 입력해주세요.';
    if (status === 't') {
      statusMessage = '비밀번호가 일치합니다!';
      statusClass = 'correct-msg';
    } else if (status === 'f') {
      statusMessage = '비밀번호가 일치하지 않습니다.';
      statusClass = 'error-msg';
    } else if (status === 'n') {
    }
  } else if (type === 'verifyCode') {
    title = '인증번호';
    placeholder = '인증번호 6자리를 입력해주세요.';
    statusClass = '';
  }
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
