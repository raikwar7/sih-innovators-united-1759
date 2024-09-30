import React from "react";

const Option = ({ opt }) => {

  return (
    <div className="flex flex-col my-2">
      <label className='text-xl text-heading font-[450] cursor-pointer font-[Poppins]' htmlFor={`${opt.sele}`}>{opt.label}</label>
      <select
        name={`${opt.sele}`}
        id={`${opt.sele}`}
        className={`font-[400] text-lg rounded-lg p-2 m-1 block "bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500"}`}
        required
        onChange={(event) => {
          console.log(event.target.value);
        }}
      >
        {opt.opt.map((ele, idx) => {
          return (
            <option key={idx} value={`${ele.val}`}>
              {ele.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Option;
