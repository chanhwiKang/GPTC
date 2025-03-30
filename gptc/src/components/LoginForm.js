import { useState } from "react";
import { loginUser } from "../services/api";

function LoginForm() {
  const [formData, setFormData] = useState({
    memberEmail: "",
    memberPw: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(formData);
      if (response?.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
        setMessage("로그인 성공!");
      } else {
        setMessage("로그인 실패: 서버에서 응답이 없습니다.");
      }
    } catch (error) {
      alert("로그인 실패:", error);
      setMessage("로그인 실패: " + (error.response?.data?.message || "서버 오류"));
    }
  };

  return (
    <div>
      <h2>로그인</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="memberEmail" placeholder="이메일" onChange={handleChange} />
        <input type="password" name="memberPw" placeholder="비밀번호" onChange={handleChange} />
        <button type="submit">로그인</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default LoginForm;