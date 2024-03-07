import React from "react";

// even odd listing
const EvenOdd = () => {
  return (
    <div>
      <ul className=" ml-16 mt-10 ">
        <li className="even:text-blue-500">1</li>
        <li className="even:text-blue-500">2</li>
        <li className="even:text-blue-500">3</li>
        <li className="even:text-blue-500">4</li>
        <li className="even:text-blue-500">5</li>
      </ul>
    </div>
  );
};

export default EvenOdd;
