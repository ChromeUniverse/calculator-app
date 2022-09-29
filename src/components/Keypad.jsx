import React, { useContext } from "react";
import { ThemeContext } from "../App";
import Key from "./Key";

function Keypad({ addChar, delChar, reset, handleOperator, handleEquals }) {

  const theme = useContext(ThemeContext);

  return (
    <div className={`keypad theme-${theme}-keypad`}>
      <Key text="7" onClick={() => addChar(7)}/>
      <Key text="8" onClick={() => addChar(8)}/>
      <Key text="9" onClick={() => addChar(9)}/>
      <Key text="del" type={1} onClick={() => delChar()}/>
      <Key text="4" onClick={() => addChar(4)}/>
      <Key text="5" onClick={() => addChar(5)}/>
      <Key text="6" onClick={() => addChar(6)}/>
      <Key text="+" onClick={() => handleOperator(0)}/>
      <Key text="1" onClick={() => addChar(1)}/>
      <Key text="2" onClick={() => addChar(2)}/>
      <Key text="3" onClick={() => addChar(3)}/>
      <Key text="-" onClick={() => handleOperator(1)}/>
      <Key text="." onClick={() => addChar('.')}/>
      <Key text="0" onClick={() => addChar(0)}/>
      <Key text="/" onClick={() => handleOperator(3)}/>
      <Key text="x" onClick={() => handleOperator(2)}/>
      <Key text="reset" type={1} area="reset" onClick={() => reset()}/>
      <Key text="=" type={2} area="equals" onClick={() => handleEquals()}/>
    </div>
  );
}

export default Keypad;
