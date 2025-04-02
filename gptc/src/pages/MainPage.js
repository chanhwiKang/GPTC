import FullLayout from '../layouts/FullLayout';
import CreateInput from '../components/CreateInput';
import DefaultButton from '../components/DefaultButton';
import MainContent from '../components/MainContent';

function MainHead(text) {
  return (
    <FullLayout>
      <div className="flex flex-col w-full h-full items-center justify-center">
        <div className="flex flex-row justify-between w-[72%]">
          <CreateInput />
          <div className="flex flex-col justify-end">
            <DefaultButton styleClass="btn-create" text="학습 생성" />
          </div>
        </div>
        <MainContent />
      </div>
    </FullLayout>
  );
}
export default MainHead;
