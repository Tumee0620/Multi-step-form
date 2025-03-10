import { headers } from "next/headers";
import Image from "next/image";
import { Input } from "./components/Input";
import { MdKeyboardArrowRight } from "react-icons/md";
export default function Home() {
  return (
    <div className="flex justify-center items-center bg-[#F4F4F4] w-[100vw] h-[100vh] ">
      <div className="flex w-[480px] h-[655px] p-8 flex-col gap-[28px]  items-start rounded-[8px] bg-[#FFF]">
        <div className="flex flex-col p-2">
          <img className="w-[60px] h-[60px]" src="Main 1.svg"></img>
          <p className="text-[26px] font-600 text-[#202124]">Join Us! 😎</p>
          <p className="flex text-center text-[18px] text-[#8E8E8E]">
            Please provide all current information accurately.
          </p>
        </div>
        <div className="flex pl-2 flex-col w-full gap-[12px]">
          <p className="text-[14px] font-600 items-start text-[#334155]">
            First name *
          </p>
          <Input></Input>
          <p className="text-[14px] font-600 items-start text-[#334155]">
            Last name *
          </p>
          <Input></Input>
          <p className="text-[14px] font-600 items-start text-[#334155]">
            Username *
          </p>
          <Input></Input>
        </div>
        <div className="flex pt-15 w-full items-center justify-center">
          <button className="text-white w-full h-[44px] gap-1 bg-[#121316] px-3 py-[10px] rounded-[6px] flex justify-center ">
            <p>Continue</p>
            <div className="flex">
              <p>1</p>
              <p>/3</p>
            </div>
            <MdKeyboardArrowRight className="size-[23px] " />
          </button>
        </div>
      </div>
    </div>
  );
}
