// src/constants/inputConfig.js

const inputConfig = {
  email: {
    title: 'Email',
    placeholder: '이메일을 입력해주세요.',
    messages: {
      t: '사용할 수 있는 E-mail입니다!',
      f: '올바른 E-mail이 아닙니다.',
    },
  },
  name: {
    title: '이름',
    placeholder: '이름을 입력해주세요.',
    messages: {
      t: '사용할 수 있는 이름입니다!',
      f: '올바른 이름이 아닙니다.',
    },
  },
  password: {
    title: '비밀번호',
    placeholder: '비밀번호를 입력해주세요.',
    messages: {
      t: '사용할 수 있는 비밀번호입니다!',
      f: '올바른 비밀번호가 아닙니다.',
    },
  },
  'password-re': {
    title: '비밀번호 확인',
    placeholder: '비밀번호를 다시 입력해주세요.',
    messages: {
      t: '비밀번호가 일치합니다!',
      f: '비밀번호가 일치하지 않습니다.',
    },
  },
  verifyCode: {
    title: '인증번호',
    placeholder: '인증번호 6자리를 입력해주세요.',
    messages: {},
  },
};

export default inputConfig;
