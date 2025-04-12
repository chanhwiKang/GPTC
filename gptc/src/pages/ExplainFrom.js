import { useLocation } from 'react-router-dom';
import { renderTableCells } from '../utils/renderTableCells';
import { useState, useEffect } from 'react';

function Explain() {
  const location = useLocation();
  const { selectedAnswers, dummyQuestions } = location.state;
  const [score, setScore] = useState(0);
  const [percentage, setPercentage] = useState(0); // 추가
  useEffect(() => {
    checkAnswer();
  }, []);
  const convertToCircleNumber = (num) => {
    const options = ['①', '②', '③', '④'];
    return options[num] || '-';
  };

  const checkAnswer = () => {
    let tempScore = 0;
    dummyQuestions.forEach((question, index) => {
      if (question.answer === selectedAnswers[index].answer) {
        tempScore += 1;
      }
    });
    setScore(tempScore);
    const totalQuestions = dummyQuestions.length;
    const calcPercentage = Math.round((tempScore / totalQuestions) * 100); // 반올림
    setPercentage(calcPercentage);
  };

  return (
    <div className="flex flex-col justify-center h-[940px] ">
      <div
        className="
      2xl:w-[1400px] 2xl:h-[80%]
      border-2 border-[#C7C5BD] rounded-[20px]
      flex flex-col  overflow-y-auto
      "
      >
        <div className="flex justify-center items-center 2xl:w-full 2xl:h-[60px] my-[30px]">
          <div className="text-[32px] w-[360px] ">시험 이름</div>
          <div className="text-[32px] w-[360px] flex justify-end italic">
            점수 : {percentage}점
          </div>
        </div>
        <div className="w-full h-[201px] rounded-[20px] flex justify-center">
          <div className="w-fit  border-2 border-[#D9D9D9] rounded-[20px]  overflow-hidden">
            <table className="w-fit  text-center border-collapse divide-x divide-[#D9D9D9] ">
              <tbody className="divide-y divide-[#D9D9D9]">
                <tr className="divide-x divide-[#D9D9D9] text-[28px]">
                  <td className="w-[96px] h-[67px]">문제</td>
                  {renderTableCells(
                    'question',
                    dummyQuestions,
                    selectedAnswers,
                    convertToCircleNumber
                  )}
                </tr>
                <tr className="divide-x divide-y divide-[#D9D9D9]">
                  <td className="w-[96px] h-[67px] text-[28px]">정답</td>
                  {renderTableCells(
                    'answer',
                    dummyQuestions,
                    selectedAnswers,
                    convertToCircleNumber
                  )}
                </tr>
                <tr className="divide-x divide-y divide-[#D9D9D9]">
                  <td className="w-[96px] h-[67px] text-[28px]">선택</td>
                  {renderTableCells(
                    'selected',
                    dummyQuestions,
                    selectedAnswers,
                    convertToCircleNumber
                  )}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center mt-[60px]">
          {dummyQuestions.map((question, index) => (
            <div key={index} className="w-[1000px] text-[22px]">
              <p>
                {index + 1}. {question.question}
              </p>
              {question.answersList.map((answer, idx) => {
                const selectedIdx = selectedAnswers[index].answer;
                const correctIdx = question.answer;

                let textColor = 'text-black'; // 기본

                if (selectedIdx === correctIdx) {
                  // 맞춘 경우
                  if (idx === selectedIdx) {
                    textColor = 'text-green-400'; // 선택지: 초록
                  }
                } else {
                  // 틀린 경우
                  if (idx === selectedIdx) {
                    textColor = 'text-red-400'; // 내가 고른 답: 빨간
                  }
                  if (idx === correctIdx) {
                    textColor = 'text-green-400'; // 정답: 초록
                  }
                }
                return (
                  <p key={idx} className={textColor}>
                    {convertToCircleNumber(idx)}
                    {answer}
                  </p>
                );
              })}
              <p>{question.explain}</p>
              <br></br>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Explain;
