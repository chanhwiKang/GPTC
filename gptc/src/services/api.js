import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // 쿠키 자동 포함
});

export const registerUser = (userData) => api.post('/member/signup', userData);

export const loginUser = async (loginData) => {
  const response = await api.post('/member/login', loginData);

  const userInfo = response.data;
  localStorage.setItem('userInfo', JSON.stringify(userInfo));

  return response.data;
};

export const getMyInfo = () =>
  axios.get('http://localhost:8080/api/member/isLoggedIn', { withCredentials: true });

export const getCurrentUser = () => api.get('/member/profile');

export const requestEmailVerification = (email, type) =>
  api.post('/email-verification/request', null, { params: { email, type } });

export const verifyEmailCode = (email, type, code) =>
  api.post('/email-verification/verify', null, { params: { email, type, code } });

export const uploadPdfFile = async (file, studyName) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('studyName', studyName);

  const response = await api.post('/file/upload-pdf', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
};

export const studyList = async () => {
  const response = await api.get('/study/studies');
  return response.data;
};

export default api;