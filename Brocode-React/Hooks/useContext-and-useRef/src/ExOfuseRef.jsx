// import React, { useState } from "react";

// const CounterUsingState = () => {
//   const [count, setCount] = useState(0);

//   const handleClick = () => {
//     setCount(prev => prev + 1);
//     console.log("useState Count:", count + 1); 
//   };

//   return (
//     <>
//       <h2>useState Counter</h2>
//       <p>UI Count: {count}</p>
//       <button onClick={handleClick}>Increase</button>
//     </>
//   );
// };

// export default CounterUsingState;



// now example of useRef() -------------------------------------------------

import React, { useRef } from "react";

const CounterUsingRef = () => {
  const countRef = useRef(0);

  const handleClick = () => {
    countRef.current = countRef.current + 1;
    console.log("useRef Count:", countRef.current);
  };

  return (
    <>
      <h2>useRef Counter</h2>
      <p>UI Count: (won't change)</p>
      <button onClick={handleClick}>Increase</button>
    </>
  );
};

export default CounterUsingRef;
