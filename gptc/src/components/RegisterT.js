import { useState } from 'react';
import { registerUser } from '../services/api';

function RegisterForm() {
  // const [formData, setFormData] = useState({
  //   memberName: '',
  //   memberEmail: '',
  //   memberPw: '',
  // });
  // const [message, setMessage] = useState('');

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await registerUser(formData);
  //     setMessage('회원가입 성공!');
  //     alert('회원가입 성공:', response?.data);
  //   } catch (error) {
  //     alert('회원가입 실패:', error);
  //     setMessage(
  //       '회원가입 실패: ' + (error.response?.data?.message || '서버 오류')
  //     );
  //   }
  // };

  return (
    <div>
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="memberName"
          placeholder="이름"
          onChange={handleChange}
        />
        <input
          type="email"
          name="memberEmail"
          placeholder="이메일"
          onChange={handleChange}
        />
        <input
          type="password"
          name="memberPw"
          placeholder="비밀번호"
          onChange={handleChange}
        />
        <button type="submit">가입하기</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default RegisterForm;
