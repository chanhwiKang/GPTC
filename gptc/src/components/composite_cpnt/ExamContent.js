import DefaultButton from '../../components/atomic_cpnt/DefaultButton';
import InputForm from '../../components/composite_cpnt/InputForm';
import { useState } from 'react';
function ExamContent() {
  // ✅ state: 폼 데이터
  const [formData, setFormData] = useState({
    examTitle: '',
    requestMessage: '',
  });

  // ✅ 공통 onChange 함수
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // ✅ 제출 시 사용할 함수
  const handleSubmit = () => {
    console.log('제출 데이터:', formData);
    // 👉 나중에 API 로 formData 를 전달하면 됩니다!
  };
  return (
    <div className="2xl:w-[1500px] xl:w-[1100px] 2xl:h-[660px] xl:h-[528px] flex justify-between ">
      <div className="w-[50%] flex flex-col justify-center items-left 2xl:py-[70px] xl:py-[10px] px-[4px]">
        <InputForm
          type="examTitle"
          isValidationRequired={false}
          className="input-exeam"
          name="examTitle"
          onChange={handleChange}
        />
        <div className="mt-[27px]">
          <div className="flex flex-row justify-between pl-[20px]">
            <div className="input-title">요청사항</div>
          </div>
          <textarea
            name="requestMessage"
            placeholder="추가적으로 요청할 사항이 있으면 입력해주세요."
            value={formData.requestMessage}
            onChange={handleChange}
            className="
            2xl:w-[580px] 2xl:h-[300px] 
            xl:w-[490px] xl:h-[300px] 
            rounded-[20px] placeholder-opacity-50 
            2xl:placeholder:text-[24px]
            xl:placeholder:text-[20px]
            placeholder-[defaultPlaceholder] 
            pl-[20px]
            2xl:text-[24px] xl:text-[20px]
            border
            border-[#C7C5BD]"
          />
        </div>
        <div className="mt-[35px] 2xl:w-[580px] xl:w-[490px] flex justify-center">
          <DefaultButton text="시험 생성" />
        </div>
      </div>
      <div className="w-px bg-[#C7C5BD]"></div> {/* 세로선 추가 */}
      <div className="w-[50%] flex justify-end items-right 2xl:py-[70px] xl:py-[10px] px-[4px]">
        <div className=" 2xl:w-[613px] 2xl:h-[498px] xl:w-[500px] xl:h-[410px] overflow-y-auto">
          <div className="flex 2xl:w-[613px] 2xl:h-[100px] xl:w-[500px] xl:h-[80px] rounded-[20px] border border-[#C7C5BD] mb-[10px]">
            <div className="2xl:w-[300px] 2xl:h-[100px] xl:w-[240px] xl:h-[80px] text-[24px] flex justify-center items-center">
              시험 이름
            </div>
            <div className="2xl:w-[100px] 2xl:h-[100px] xl:h-[80px] text-[24px] font-bold flex justify-center items-center">
              미응시
            </div>
            <div className="flex-1 2xl:h-[100px] xl:h-[80px] flex justify-center items-center">
              <button className="btn-exam">시험 응시</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ExamContent;
