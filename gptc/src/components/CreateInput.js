import '../styles/input.css';

function CreateInput({ placeholder, styleClass, onChange, value, type }) {
  return (
    <div>
      <div className="ml-[2%]">학습명</div>
      <input
        className={`input-create ${styleClass}`}
        placeholder="생성할 학습의 이름을 입력해주세요."
      />
    </div>
  );
}

export default CreateInput;
