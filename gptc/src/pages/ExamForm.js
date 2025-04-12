import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { dummyQuestions } from '../testData/dummyQuestion';
import DefaultButton from '../components/atomic_cpnt/DefaultButton';
import QuestionForm from '../components/composite_cpnt/QuestionForm';
import QuestionNumBtns from '../components/composite_cpnt/QuestionNumBtns';

function ExamForm() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const navigate = useNavigate();

  const handleDirect = (question) => {
    setCurrentQuestion(question);
  };

  const handlePrev = () => {
    setCurrentQuestion((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentQuestion((prev) => Math.min(prev + 1, dummyQuestions.length - 1));
  };

  const handleCheckAnswer = (selectedAnswers) => {
    const isAllAnswered = Object.keys(selectedAnswers).length === 10;
    if (isAllAnswered) {
      navigate('/explain', { state: { selectedAnswers, dummyQuestions } });
      return;
    }
    alert('모든 문제에 답해주세요!');
    return;
  };

  const handleAnswerSelect = (answer) => {
    setSelectedAnswers((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.currentQuestion === currentQuestion
      );

      if (existingIndex !== -1) {
        // 이미 선택한 답변이 있으면 업데이트
        const updatedAnswers = [...prev];
        updatedAnswers[existingIndex] = {
          currentQuestion,
          answer,
        };
        return updatedAnswers;
      } else {
        // 없으면 새로 추가
        return [
          ...prev,
          {
            currentQuestion,
            answer,
          },
        ];
      }
    });
  };

  return (
    <div
      className="
                  2xl:w-[680px] 2xl:h-[830px]
                  flex justify-center items-center
                  border-2 border-[#C7C5BD] rounded-[20px]"
    >
      <div className="2xl:w-[630px] flex flex-col">
        <div className="2xl:text-[32px] 2xl:mb-[25px] w-full flex justify-center">
          시험 제목 가져오기
        </div>
        <QuestionNumBtns
          selectedAnswers={selectedAnswers}
          goToSelectPage={handleDirect}
        />
        <hr className="my-[20px] boder-2 border-[#C7C5BD] 2xl:w-[630px]" />
        {/* 백엔드에서 질문과 답을 받아와야 함 */}
        <QuestionForm
          index={`${currentQuestion + 1}. `}
          question={dummyQuestions[currentQuestion].question}
          arrAnswer={dummyQuestions[currentQuestion].answersList}
          selectedAnswer={
            selectedAnswers.find(
              (item) => item.currentQuestion === currentQuestion
            )?.answer
          } // 선택된 답 넘기기
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
          {currentQuestion === dummyQuestions.length - 1 ? (
            // 제출할 때 onClick 수정 필요
            <DefaultButton
              styleClass="btn-exam"
              text="제출"
              onClick={() => handleCheckAnswer(selectedAnswers)}
            />
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
