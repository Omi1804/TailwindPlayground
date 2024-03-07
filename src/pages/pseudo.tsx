import React from "react";

const Hovering = () => {
  return (
    <div>
      <button className=" m-10 p-3 bg-green-500 hover:bg-violet-400 active:bg-violet-700 focus:ring focus:ring-blue-700">
        pseudo
      </button>
      <details className="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg">
        <summary className="text-sm leading-6 text-slate-90 font-semibold select-none">
          Why do they call it Ovaltine?
        </summary>
      </details>
    </div>
  );
};

export default Hovering;
