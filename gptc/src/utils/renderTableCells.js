// src/utils/renderTableCells.js

export const renderTableCells = (
  type,
  dummyQuestions,
  selectedAnswers,
  convertToCircleNumber
) => {
  return dummyQuestions.map((question, index) => {
    switch (type) {
      case 'question':
        return (
          <td key={`question-${index}`} className="w-[72px] h-[67px]">
            {index + 1}
          </td>
        );

      case 'answer':
        return (
          <td key={`answer-${index}`} className="w-[72px] h-[67px] text-[40px]">
            {convertToCircleNumber(question.answer)}
          </td>
        );

      case 'selected':
        const selected = selectedAnswers.find(
          (item) => item.currentQuestion === index
        );
        const answer = selected?.answer;

        return (
          <td
            key={`selected-${index}`}
            className={`w-[72px] h-[67px] text-[40px] ${
              answer === dummyQuestions[index].answer
                ? 'bg-green-500'
                : 'bg-red-500'
            }`}
          >
            {convertToCircleNumber(answer)}
          </td>
        );

      default:
        return null;
    }
  });
};
