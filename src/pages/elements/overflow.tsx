import React from "react";

const overflow = () => {
  return (
    <div className="w-[23rem]  bg-[#1e293be3] mx-auto h-[5rem] hover:overflow-hidden transition-all rounded-3xl flex m-10 items-center border-[2px] border-gray-300">
      <img
        src="/img1.jpg"
        className="w-[6rem] relative right-2 h-[6rem] rounded-full object-cover object-left "
        alt="Img1"
      />
      <div className=" px-3 py-2 text-white">
        <strong>Om Nigam</strong>
        <p className=" text-[.7rem]">Full Stack Developer</p>
      </div>
    </div>
  );
};

export default overflow;
