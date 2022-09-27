import React, { useContext } from "react";
import { ThemeContext } from "../App";
import Key from "./Key";

function Keypad() {

  const theme = useContext(ThemeContext);

  return (
    <div className={`keypad theme-${theme}-keypad`}>
      <Key text="7" />
      <Key text="8" />
      <Key text="9" />
      <Key text="del" type={1}/>
      <Key text="4" />
      <Key text="5" />
      <Key text="6" />
      <Key text="+" />
      <Key text="1" />
      <Key text="2" />
      <Key text="3" />
      <Key text="-" />
      <Key text="." />
      <Key text="0" />
      <Key text="/" />
      <Key text="x" />
      <Key text="reset" type={1} area="reset"/>
      <Key text="=" type={2} area="equals"/>
    </div>
  );
}

export default Keypad;
