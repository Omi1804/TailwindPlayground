import React from "react";

const display = () => {
  return (
    <>
      <div className=" m-10 p-5 flex w-[25rem] border-[3px] border-red-600 bg-black items-center justify-center">
        <img src="/img1.jpg" className=" w-[5rem] object-contain" alt="" />
        <div className="text-white pl-3">
          <h1 className="text-white">Om Nigam</h1>
          <p>Full Stack developer</p>
        </div>
      </div>
      <div className="p-3 list-none grid grid-cols-3 border-[2px] border-black m-5 items-center justify-items-center">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
      </div>
    </>
  );
};

export default display;
