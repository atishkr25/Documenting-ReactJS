// useEffect : 
// React hook ek function hai jo component render hone ke baad side effects
// (jaise data fetch, DOM update, event listener, etc.) handle karta hai.

//3 TYPES OF SYNTAX : 

//useEffect(() => {
  // code runs after every render
//});

// useEffect(() => {
//   // code runs only once
// }, []);

// useEffect(() => {
//   // code runs when 'count' changes
// }, [count]);


import React, { useEffect, useState } from 'react';

const UseEffect = () => {
  const [count, setCount] = useState(0);

//   useEffect(() => {
//     document.title = `Count: ${count}`; 
//   }, []);  
  
  useEffect(() => {
    document.title = `Count: ${count}`; 
  }, [count]); 

  function addCount() {
    setCount(c => c + 1);
  }

  function subtractCount() {
    setCount(c => c - 1);
  }

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={subtractCount}>Subtract</button>
    </>
  );
};

export default UseEffect;
