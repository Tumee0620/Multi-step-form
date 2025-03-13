import { Button } from "./Button";
import { Input } from "./Input";
export const Step1 = ({ onclick }) => {
  return (
    <div className="flex justify-center items-center bg-[black] w-[100vw] h-[100vh] ">
      <div className="flex w-[480px] h-[655px] p-8 flex-col gap-[28px]  items-start rounded-[8px] bg-[#FFF]">
        <div className="flex flex-col p-2">
          <img className="w-[60px] h-[60px]" src="Main 1.svg"></img>
          <p className="text-[26px] font-600 text-[#202124]">Join Us! 😎</p>
          <p className="flex text-center text-[18px] text-[#8E8E8E]">
            Please provide all current information accurately.
          </p>
        </div>
        <Input
          ermsg={"Please provide a valid email address."}
          title={"First name *"}
        ></Input>
        <Input
          ermsg={"Please enter a valid phone number."}
          title={"Last name *"}
        ></Input>
        <Input
          ermsg={"Password must include letters and numbers."}
          title={"Username *"}
        ></Input>
        <div className="flex pt-10 w-full items-center justify-center">
          <Button onclick={onclick}></Button>
        </div>
      </div>
    </div>
  );
};
