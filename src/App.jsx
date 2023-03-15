import "./styles.css";
import { ColoredMessage } from "./components/ColoredMessage";
import { useState } from "react";
import { useEffect } from "react";
import { CssModules } from "./components/CssModules";

export const App = () => {
  const [ num, setNum ] = useState(0); 
  // useEffect( () => {
  //   alert();
  // }, [num]);
  const onClickButton = () => {
    // setNum(num + 1);
    setNum((prev) => prev + 1);
    setNum((prev) => prev + 1);
  };  
  return (
    <div>
      {/* <h1 style={{ color: "blue" }}>Hello CodeSandbox</h1>
      <ColoredMessage color="pink">Hi Kzm.</ColoredMessage>
      <ColoredMessage color="blue">How are you doing?</ColoredMessage>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick = {onClickButton}>Push Button</button>
      <p>{num}</p> */}
      <CssModules />
    </div>
  );
}
