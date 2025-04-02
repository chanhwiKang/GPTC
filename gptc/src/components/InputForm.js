import DefaultInput from './DefaultInput';
import { useState } from 'react';

function InputForm({
  onStatusChange,
  type,
  password,
  setPassword,
  isValidationRequired,
  name,
  onChange,
  value,
}) {
  const [status, setStatus] = useState('n');

  let title = '';
  let placeholder = '';
  let statusMessage = '';
  let statusClass = '';

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (isValidationRequired) {
      if (type === 'email') {
        // 이메일 정규식 (알파벳, 숫자, ., -, _ 만 허용)
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        // 특수문자 체크 (허용된 문자 외에 다른 특수문자가 있는지 확인)
        const specialCharRegex = /[^a-zA-Z0-9._@-]/;

        if (specialCharRegex.test(value) || !emailRegex.test(value)) {
          setStatus('f'); // 특수문자가 포함되었거나 이메일 형식이 아니면 'f'
          onStatusChange(false);
        } else {
          setStatus('t'); // 올바른 이메일 형식이면 't'
          onStatusChange(true);
        }
      } else if (type === 'name') {
        const nameRegex = /^[a-zA-Z가-힣]+$/;
        if (!nameRegex.test(value)) {
          setStatus('f');
          onStatusChange(false);
        } else {
          setStatus('t');
          onStatusChange(true);
        }
      } else if (type === 'password') {
        const passwordRegex =
          /^(?=.*[a-zA-Z]|\d|[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        setPassword(value);
        if (!passwordRegex.test(value)) {
          setStatus('f');
          onStatusChange(false);
        } else {
          setStatus('t');
          onStatusChange(true);
        }
      } else if (type === 'password-re') {
        if (value !== password) {
          setStatus('f');
          onStatusChange(false);
        } else {
          setStatus('t');
          onStatusChange(true);
        }
      }
    }
    onChange(e);
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
    placeholder = '이메일을 입력해주세요.';
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
  } else if (type === 'Authentication') {
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
