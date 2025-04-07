function QuestionForm({ index, question, arrAnswer }) {
  const answerNumArr = ['①', '②', '③', '④'];
  return (
    <div className="flex flex-col w-full 2xl:h-[500px] items-start justify-start">
      <p className="2xl:text-[28px] mb-[10px]">{index + question}</p>
      {arrAnswer.map((answer, index) => (
        <button key={index} className="2xl:text-[28px]">
          {`${answerNumArr[index]} ${answer}`}
        </button>
      ))}
    </div>
  );
}

export default QuestionForm;
