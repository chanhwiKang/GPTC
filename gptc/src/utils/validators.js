export const validateEmail = (email) => {
  // 이메일 정규식 (알파벳, 숫자, ., -, _ 만 허용)
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  // 특수문자 체크 (허용된 문자 외에 다른 특수문자가 있는지 확인)
  const specialCharRegex = /[^a-zA-Z0-9._@-]/;
  return emailRegex.test(email) && !specialCharRegex.test(email);
};
export const validateName = (name) => {
  const nameRegex = /^[a-zA-Z가-힣]+$/;
  return nameRegex.test(name);
};
export const validatePw = (pw) => {
  const pwRegex = /^(?=.*[a-zA-Z]|\d|[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return pwRegex.test(pw);
};
