import { useState } from 'react';
import { dummyQuestions } from '../testData/dummyQuestion';
import DefaultButton from '../components/atomic_cpnt/DefaultButton';
import QuestionForm from '../components/composite_cpnt/QuestionForm';
import QuestionNumBtns from '../components/composite_cpnt/QuestionNumBtns';
function ExamForm() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const handlePrev = () => {
    setCurrentQuestionIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentQuestionIndex((prev) =>
      Math.min(prev + 1, dummyQuestions.length - 1)
    );
  };

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: answerIndex,
    }));
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
        <QuestionNumBtns selectedAnswers={selectedAnswers} />
        <hr className="my-[20px] boder-2 border-[#C7C5BD] 2xl:w-[630px]" />

        {/* 백엔드에서 질문과 답을 받아와야 함 */}
        <QuestionForm
          index={`${currentQuestionIndex + 1}. `}
          question={dummyQuestions[currentQuestionIndex].question}
          arrAnswer={dummyQuestions[currentQuestionIndex].answersList}
          selectedAnswer={selectedAnswers[currentQuestionIndex]} // 선택된 답 넘기기
          onAnswerSelect={handleAnswerSelect} // 선택 함수 넘기기
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
