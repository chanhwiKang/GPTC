function QuestionForm({
  index,
  question,
  arrAnswer,
  selectedAnswer,
  onAnswerSelect,
}) {
  const answerNumArr = ['①', '②', '③', '④'];
  return (
    <div className="flex flex-col w-full 2xl:h-[500px] items-start justify-start">
      <p className="2xl:text-[28px] mb-[10px]">{index + question}</p>
      {arrAnswer.map((answer, index) => (
        <button
          key={index}
          className={`2xl:text-[28px] ${
            selectedAnswer === index ? 'text-[#8854F7]' : 'text-black'
          }`}
          onClick={() => onAnswerSelect(index)}
        >
          {`${answerNumArr[index]} ${answer}`}
        </button>
      ))}
    </div>
  );
}

export default QuestionForm;
