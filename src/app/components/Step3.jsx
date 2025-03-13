import { Input } from "./Input";
import { Button } from "./Button";
import { CiImageOn } from "react-icons/ci";

export const Step3 = ({ onclick }) => {
  return (
    <div className="flex justify-center items-center bg-black w-[100vw] h-[100vh]  ">
      <div className="flex w-[480px] h-[655px] p-8 flex-col gap-[10px]   justify-between rounded-[8px] bg-[#FFF]">
        <div className="flex flex-col p-2">
          <img className="w-[60px] h-[60px]" src="Main 1.svg"></img>
          <p className="text-[26px] font-600 text-[#202124]">Join Us! 😎</p>
          <p className="flex text-center text-[18px] text-[#8E8E8E]">
            Please provide all current information accurately.
          </p>
        </div>
        <div className="flex justify-between flex-col w-full h-full">
          <div>
            <p className="text-black">Date of birth</p>
            <input
              className="w-[416px] h-[68px] border-[#8B8E95] border-solid border-1 bg-white text-black px-2"
              type="date"
            />
          </div>
          <div>
            <p className="text-black">Profile image</p>
            <div className="h-[180px] w-[416px] bg-gray-100 flex justify-center items-center flex-col">
              <div className="w-[20px] h-[20px] bg-white rounded-full flex items-center justify-center">
                <CiImageOn className="w-[12px] h-[12px]   fill-black rounded-full bg-white   " />
              </div>
              <p className="text-black">Add image</p>
            </div>
          </div>

          <div className="flex pt-3 w-full items-center justify-center">
            <Button onclick={onclick}></Button>
          </div>
        </div>
      </div>
    </div>
  );
};
