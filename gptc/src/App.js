import DefaultButton from './components/DefaultButton';
import DefaultInput from './components/DefaultInput';

function App() {
  return (
    <div
      className="
    bg-[#CEE4FF]
    w-[33.59vw]
    h-[83.33vh]
    shadow-[4px_4px_10px_rgba(0,0,0,0.25)]
    rounded-[20px] 
    "
    >
      <div>
        <DefaultButton text="11111" styleClass="" />
      </div>
      <div>
        <DefaultInput placeholder="이메일을 입력해주세요." />
      </div>
    </div>
  );
}

export default App;
