function QuestionNumBtns({ selectedAnswers, goToSelectPage }) {
  return (
    <div
      className="
    2xl:w-full 2xl:h-[50px]
    flex justify-center items-center
    "
    >
      {[...Array(10)].map((_, i) => (
        <button
          key={i}
          index={i}
          onClick={() => {
            console.log('Button clicked:', i);
            goToSelectPage(i);
          }}
          className={`
      2xl:w-[50px] 2xl:h-[50px] 2xl:text-[24px]
      flex justify-center items-center
      border-y-2 border-l-2 border-black
      ${i === 0 ? 'rounded-l-[20px]' : ''}
      ${i === 9 ? 'rounded-r-[20px] border-r-2' : ''}
      ${selectedAnswers[i] === undefined ? 'bg-white' : 'bg-defaultBtnColor'}
      `}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}

export default QuestionNumBtns;
