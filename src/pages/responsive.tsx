import React from "react";

//creating a responsive card
const Responsive = () => {
  return (
    <div className="m-10 border border-red-700 max-w-md bg-white rounded-xl overflow-hidden md:max-w-2xl">
      <div className=" md:flex">
        <div className="md:shrink-0">
          <img
            src="/img1.jpg"
            className="h-48 w-full object-cover md:h-full md:w-48"
            alt=""
          />
        </div>
        <div className="p-8">
          <div className=" uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Company retreats
          </div>
          <a
            href="#"
            className=" block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            Incredible accommodation for your team
          </a>
          <p className=" mt-2 text-slate-500 text-sm tracking-wider ">
            Looking to take your team away on a retreat to enjoy awesome food
            and take in some sunshine? We have a list of places to do just that.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Responsive;