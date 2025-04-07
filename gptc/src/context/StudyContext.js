import React, { createContext, useContext, useState } from 'react';
import { studyList } from '../services/api';

const StudyContext = createContext();

export const StudyProvider = ({ children }) => {
  const [studies, setStudies] = useState([]);

  const fetchStudies = async () => {
    try {
      const data = await studyList();
      setStudies(data);
    } catch (error) {
      console.error('학습 목록 불러오기 실패:', error);
    }
  };

  return (
    <StudyContext.Provider value={{ studies, setStudies, fetchStudies }}>
      {children}
    </StudyContext.Provider>
  );
};

export const useStudies = () => useContext(StudyContext);