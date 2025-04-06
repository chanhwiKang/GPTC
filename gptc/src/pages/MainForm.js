import React, { useState } from 'react';
import axios from 'axios';
import MainBackBoard from '../layouts/MainBackBoard';
import { useLogin } from '../context/LoginContext';
import { useNavigate } from 'react-router-dom';
import DefaultButton from '../components/atomic_cpnt/DefaultButton';
import { uploadPdf } from '../services/api';

function MainForm() {

  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [studyName, setStudyName] = useState('');
  const { isLoggedIn, userInfo } = useLogin();

  const handleFileChange = (e) => {
      if (!isLoggedIn) navigate('/login');
      
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      setFileName(selectedFile ? selectedFile.name : '');
  };

  const handleUpload = async () => {
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }
    if (!studyName.trim()) {
      alert('학습명을 입력해주세요.');
      return;
    }
    if (!file) {
      alert('파일을 선택해주세요.');
      return;
    }
  
    const formData = new FormData();
    formData.append('file', file);
    formData.append('studyName', studyName);
  
    try {
      const response = await axios.post('http://localhost:8080/api/file/upload-pdf', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      });
  
      alert('파일 업로드 성공!');
      console.log(response.data);
    } catch (err) {
      console.error('업로드 실패:', err);
      alert('파일 업로드 실패!');
    }
  };

  return (
    <div className="flex flex-col w-full h-full items-center justify-center">
        <div className="flex flex-row justify-between w-[72%]">
          <div>
            <div className="flex flex-row justify-between pl-[20px]">
              <div className="input-title">학습명</div>
            </div>
            <input name="studyName" 
              className='input-default' 
              style={{width: '580px', height: '48px', border: '1px solid #c7c5bd', borderRadius: '20px'}} 
              placeholder='학습명을 입력해주세요.'
              value={studyName}
              onChange={(e) => setStudyName(e.target.value)}/>
          </div>
           <div className="flex flex-col justify-end">
            <DefaultButton styleClass="btn-create" text="학습 생성" onClick={handleUpload}/>
           </div>
        </div>
        <MainBackBoard>
        <div>
            <input type="file" id="fileInput" style={{ display: 'none' }} accept="application/pdf" onChange={handleFileChange}/>
            {!fileName && (
            <label htmlFor="fileInput" className="cursor-pointer">
                <div className="flex flex-row justify-center">
                    <img
                    src="/assets/pdfIcon.png"
                    alt="googleImg"
                    className="h-[200px] w-[200px]"
                    ></img>
                    <span className="flex items-center text-[300%] text-[#0793f7] font-bold">
                    + 파일 추가
                    </span>
                </div>
                
                <div className="flex justify-center text-center text-[300%] font-bold mt-[7%]">
                    클릭 한 번으로 PDF를 업로드하고
                    <br /> 나만의 학습을 생성해보세요!
                </div>
            </label>
            )}

            {fileName && (
            <label htmlFor="fileInput" className="cursor-pointer">
                <div className="mt-6 text-5xl font-semibold text-gray-700">
                선택한 학습 파일: <span className="text-blue-600">{fileName}</span>
                </div>
            </label>
            )}
        </div>
        </MainBackBoard>
    </div>
  );
}

export default MainForm;
