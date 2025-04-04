import CreateInput from '../../components/atomic_cpnt/CreateInput';
import DefaultButton from '../../components/atomic_cpnt/DefaultButton';
import MainContent from '../../components/composite_cpnt/MainContent';
function MainForm() {
  return (
    <div className="flex flex-col w-full h-full items-center justify-center">
      <div className="flex flex-row justify-between w-[72%]">
        <CreateInput />
        <div className="flex flex-col justify-end">
          <DefaultButton styleClass="btn-create" text="학습 생성" />
        </div>
      </div>
      <MainContent />
    </div>
  );
}

export default MainForm;
