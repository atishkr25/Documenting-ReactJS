import React, { useState, useEffect } from "react";

function ExOfUseEffect() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }

    window.addEventListener("resize", handleResize);
    console.log("EVENT LISTENER ADDED");

    // Cleanup function → removes listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("EVENT LISTENER REMOVED");
    };
  }, []); // Empty dependency → runs only once (on mount/unmount)

  return (
    <>
      <p>Window Width: {width}px</p>
      <p>Window Height: {height}px</p>
    </>
  );
}

export default ExOfUseEffect;
