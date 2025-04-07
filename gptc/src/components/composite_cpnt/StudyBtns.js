function StudyBtns({ activeContent, setActiveContent }) {
  const buttons = ['시험', '교안', '통계', '설정'];

  return (
    <div className="flex justify-around 2xl:text-[32px] 2xl:h-[50px] xl:text-[28px] xl:h-[40px]">
      {buttons.map((btn) => (
        <button
          key={btn}
          onClick={() => setActiveContent(btn)}
          className={`relative hover:text-[#8854F7] transition-colors duration-300 ${
            activeContent === btn ? 'text-[#8854F7]' : 'text-gray-400 '
          }`}
        >
          {btn}
          <span
            className={`absolute left-0 -bottom-1 h-1 w-full bg-[#8854F7] transition-all duration-300 ${
              activeContent === btn ? 'opacity-100' : 'opacity-0'
            }`}
          ></span>
        </button>
      ))}
    </div>
  );
}

export default StudyBtns;
