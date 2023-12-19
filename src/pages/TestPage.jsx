import React, { useState, useEffect, useRef } from "react";
//import useIsMountedRef from "use-is-mounted-ref";

// import useIsMounted from "../hooks/useIsMounted";

function TestPage() {
  //option 1
  // const [state, setState] = useState([]);
  // useEffect(() => {
  //   console.log("trigger");
  //   setState(["one", "two"]);
  // }, []);

  //option 2
  // const initialized = useRef(false);

  // useEffect(() => {
  //   if (!initialized.current) {
  //     initialized.current = true;

  //     console.log("trigger");
  //   }
  // }, []);

  //option 3
  const effectRan = useRef(false);

  useEffect(() => {
    if (!effectRan.current) {
      console.log("effect applied - only on the FIRST mount");
    }

    return () => (effectRan.current = true);
  }, []);

  return (
    <>
      {/* {state.map((d) => (
        <div key={d}>{d}</div>
      ))} */}
      something
    </>
  );
}

export default TestPage;
