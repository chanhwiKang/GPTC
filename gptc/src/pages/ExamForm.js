import { useState } from 'react';
import DefaultButton from '../components/atomic_cpnt/DefaultButton';
import QuestionForm from '../components/composite_cpnt/QuestionForm';
import QuestionNumBtns from '../components/composite_cpnt/QuestionNumBtns';
function ExamForm() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const dummyQuestions = [
    {
      question: '고양이가 내는 소리는?',
      answers: ['야옹', '멍멍', '찍찍', '음메'],
    },
    {
      question: '강아지가 내는 소리는?',
      answers: ['야옹', '멍멍', '찍찍', '음메'],
    },
    {
      question: '소가 내는 소리는?',
      answers: ['음메', '꿀꿀', '찍찍', '멍멍'],
    },
    {
      question: '돼지가 내는 소리는?',
      answers: ['꿀꿀', '찍찍', '음메', '짹짹'],
    },
    {
      question: '쥐가 내는 소리는?',
      answers: ['찍찍', '멍멍', '꿀꿀', '짹짹'],
    },
    {
      question: '닭이 내는 소리는?',
      answers: ['꼬끼오', '꿀꿀', '찍찍', '짹짹'],
    },
    {
      question: '고양이의 영어 이름은?',
      answers: ['Cat', 'Dog', 'Mouse', 'Cow'],
    },
    {
      question: '강아지의 영어 이름은?',
      answers: ['Dog', 'Cat', 'Pig', 'Cow'],
    },
    {
      question: '소의 영어 이름은?',
      answers: ['Cow', 'Pig', 'Mouse', 'Chicken'],
    },
    {
      question: '돼지의 영어 이름은?',
      answers: ['Pig', 'Dog', 'Cat', 'Mouse'],
    },
  ];
  const handlePrev = () => {
    setCurrentQuestionIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentQuestionIndex((prev) =>
      Math.min(prev + 1, dummyQuestions.length - 1)
    );
  };

  return (
    <div
      className="
    2xl:w-[680px] 2xl:h-[830px]
    flex justify-center items-center
    border-2 border-[#C7C5BD] rounded-[20px]
  "
    >
      <div className="2xl:w-[630px] flex flex-col">
        <div className="2xl:text-[32px] 2xl:mb-[25px] w-full flex justify-center">
          시험 제목 가져오기
        </div>
        <QuestionNumBtns />
        <hr className="my-[20px] boder-2 border-[#C7C5BD] 2xl:w-[630px]" />

        {/* 백엔드에서 질문과 답을 받아와야 함 */}
        <QuestionForm
          index={`${currentQuestionIndex + 1}. `}
          question={dummyQuestions[currentQuestionIndex].question}
          arrAnswer={dummyQuestions[currentQuestionIndex].answers}
        />
        {/* 백엔드에서 질문과 답을 받아와야 함 */}

        <hr className="my-[30px] boder-2 border-[#C7C5BD] 2xl:w-[630px]" />
        <div className="flex justify-between">
          <DefaultButton
            styleClass="btn-exam"
            text="이전"
            onClick={handlePrev}
          />
          {currentQuestionIndex === dummyQuestions.length - 1 ? (
            // 제출할 때 onClick 수정 필요
            <DefaultButton styleClass="btn-exam" text="제출" onClick={null} />
          ) : (
            <DefaultButton
              styleClass="btn-exam"
              text="다음"
              onClick={handleNext}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default ExamForm;
