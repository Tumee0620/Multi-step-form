import { Input } from "./Input";
import { Button } from "./Button";
export const Step2 = ({ onclick }) => {
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
        <Input
          ermsg={"Please provide a valid email address."}
          title={"Email*"}
        ></Input>
        <Input
          ermsg={"Please enter a valid phone number."}
          title={"Phone number*"}
        ></Input>
        <Input
          ermsg={"Password must include letters and numbers."}
          title={"Password *"}
        ></Input>
        <Input
          ermsg={"Password must include letters and numbers."}
          title={"Confirm password *"}
        ></Input>
        <div className="flex pt-3 w-full items-center justify-center">
          <Button onclick={onclick}></Button>
        </div>
      </div>
    </div>
  );
};
