import React from "react";

const Nthchild = () => {
  const Child = () => {
    const listItems = [];
    for (let i = 0; i < 10; i++) {
      listItems.push(
        <li key={i} className=" [&:nth-child(3)]:bg-cyan-300">
          Hello
        </li>
      );
    }
    return <>{listItems}</>;
  };

  return (
    <ul>
      <Child />
    </ul>
  );
};

export default Nthchild;
