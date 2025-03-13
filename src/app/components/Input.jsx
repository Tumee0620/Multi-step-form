export const Input = ({ title, ermsg, isError, onChange }) => {
  return (
    <div className="flex pl-2 flex-col w-full gap-[12px]">
      <p className="text-[14px] font-600 items-start text-[#334155]">{title}</p>
      <input
        onChange={onChange}
        className="w-full  flex p-3 items-center text-[] rounded-[8px] border-[1px] border-solid border-[#0CA5E9] text-[#8B8E95] "
        type="text"
        placeholder="Placeholder"
      ></input>
      {isError && <p>Error {ermsg}</p>}
    </div>
  );
};
