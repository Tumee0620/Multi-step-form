import { MdKeyboardArrowRight } from "react-icons/md";
import { IoChevronBack } from "react-icons/io5";
export const Button = ({ count, onclick, backclick }) => {
  return (
    <div className="flex w-full gap-2">
      {count > 1 && (
        <button
          onClick={backclick}
          className="items-center text-black border-gray-600 border-solid border-1 w-full h-[44px] gap-1 bg-[white] px-3 py-[10px] rounded-[6px] flex justify-center "
        >
          <IoChevronBack />
          Back
        </button>
      )}
      <button
        onClick={onclick}
        className="text-white w-full h-[44px] gap-1 bg-[#121316] px-3 py-[10px] rounded-[6px] flex justify-center "
      >
        <p>Continue</p>
        <div className="flex">
          <p>1</p>
          <p>/3</p>
        </div>
        <MdKeyboardArrowRight className="size-[23px] " />
      </button>
    </div>
  );
};
