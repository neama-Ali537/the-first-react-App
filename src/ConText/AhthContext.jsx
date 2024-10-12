import React, { createContext, useState } from "react";

export let AhthContext = createContext(null);
export default function AhthContextProvider(props) {
  const [ userData, setUserData ] = useState(null);
  return (
    <>
      <AhthContext.Provider value={{ userData, setUserData }}>
        {props.children}
    </AhthContext.Provider>
    </>
  );
}
