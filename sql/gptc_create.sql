DROP DATABASE GPTC;
CREATE DATABASE GPTC;
USE GPTC;

CREATE TABLE MEMBER (
    memberNo BIGINT AUTO_INCREMENT,
    memberName VARCHAR(30) NOT NULL,
    memberEmail VARCHAR(100) UNIQUE NOT NULL,
    memberPw VARCHAR(100) NOT NULL,
    memberDate DATE DEFAULT CURRENT_DATE,
    CONSTRAINT PRIMARY KEY (memberNo)
);

CREATE TABLE STUDY (
    studyNo BIGINT AUTO_INCREMENT,
    memberNo BIGINT NOT NULL,
    studyName VARCHAR(20) NOT NULL,
    studyDate DATE DEFAULT CURRENT_DATE,
    CONSTRAINT PRIMARY KEY (studyNo),
    FOREIGN KEY (memberNo) REFERENCES MEMBER(memberNo) ON DELETE CASCADE
);

CREATE TABLE PDF (
    pdfNo BIGINT AUTO_INCREMENT,
    studyNo BIGINT NOT NULL,
    pdfName VARCHAR(20) NOT NULL,
    pdfText LONGTEXT NOT NULL,
	 CONSTRAINT PRIMARY KEY (pdfNo),
    FOREIGN KEY (studyNo) REFERENCES STUDY(studyNo) ON DELETE CASCADE
);

CREATE TABLE EXAM (
    examNo BIGINT AUTO_INCREMENT,
    studyNo BIGINT NOT NULL,
    examTitle VARCHAR(20) NOT NULL,
    examDate DATE DEFAULT CURRENT_DATE,
    examScore INT CHECK (examScore >= 0 AND examScore <= 100),
    CONSTRAINT PRIMARY KEY (examNo),
    FOREIGN KEY (studyNo) REFERENCES STUDY(studyNo) ON DELETE CASCADE
);

CREATE TABLE QUESTION (
    questionNo BIGINT AUTO_INCREMENT,
    examNo BIGINT NOT NULL,
    questionText VARCHAR(1000) NOT NULL,
    questionExplanation VARCHAR(1000),
    CONSTRAINT PRIMARY KEY (questionNo),
    FOREIGN KEY (examNo) REFERENCES EXAM(examNo) ON DELETE CASCADE
);

CREATE TABLE CHOICE (
    choiceNo BIGINT AUTO_INCREMENT,
    questionNo BIGINT NOT NULL,
    choiceText VARCHAR(100) NOT NULL,
    choiceIsAnswer TINYINT(1) NOT NULL DEFAULT 0,
    choiceIsSelected TINYINT(1) NOT NULL DEFAULT 0,
    CONSTRAINT PRIMARY KEY (choiceNo),
    FOREIGN KEY (questionNo) REFERENCES QUESTION(questionNo) ON DELETE CASCADE
);












