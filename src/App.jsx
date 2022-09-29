import React, { createContext, useEffect, useState } from "react";

// components
import Header from "./components/Header";
import Display from "./components/Display";
import Keypad from "./components/Keypad";

// theme stylesheets
import './css/theme-1.css'
import './css/theme-2.css'
import './css/theme-3.css'

// context for themes
export const ThemeContext = createContext();

function App() {

  const [theme, setTheme] = useState(1);

  const [primary, setPrimary] = useState('');
  const [secondary, setSecondary] = useState('');
  const [operator, setOperator] = useState(false);
  const [hold, setHold] = useState();
  const [previous, setPrevious] = useState('');

  useEffect(() => {

    function handleKeyDown(event) {
      
    }

    window.addEventListener('keydown', handleKeyDown) 
  
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  }, [])

  // run calculation
  function calc(shift = true, swap) {
    let result;
    let originalPrimary = primary;
    const primaryNumber = Number(primary);
    const secondaryNumber = Number(secondary);

    // operator index table
    // false -> no operation
    // 0     -> +
    // 1     -> -
    // 2     -> x
    // 3     -> /

    if (swap) {
      console.log('got here!');
      if (operator === 0) result =  primaryNumber + secondaryNumber;
      if (operator === 1) result =  primaryNumber - secondaryNumber;
      if (operator === 2) result =  primaryNumber * secondaryNumber;
      if (operator === 3) result =  primaryNumber / secondaryNumber;
    } else {
      if (operator === 0) result =  secondaryNumber + primaryNumber;
      if (operator === 1) result =  secondaryNumber - primaryNumber;
      if (operator === 2) result =  secondaryNumber * primaryNumber;
      if (operator === 3) result =  secondaryNumber / primaryNumber;
    }

    // if (operator === 0) result =  secondaryNumber + primaryNumber;
    // if (operator === 1) result =  secondaryNumber - primaryNumber;
    // if (operator === 2) result =  secondaryNumber * primaryNumber;
    // if (operator === 3) result =  secondaryNumber / primaryNumber;
    

    console.log('Result is:', result);

    // update inputs based on calculation result
    setPrimary(result.toString());
    // setSecondary(originalPrimary);
    if (!shift) setSecondary(originalPrimary);
  }

  // add new character to primary input
  function addChar(char) {   
    if (previous === '=') {
      setSecondary('');
    }

    if (hold === true) {
      setSecondary(primary);
      setPrimary('');
      setHold(false);
    } 
    setPrimary(oldPrimary => oldPrimary + char.toString());
    setPrevious(`char-${char}`);
  }

  // remove character from primary input
  function delChar() {
    setPrimary(oldPrimary => oldPrimary.slice(0, oldPrimary.length - 1));
    setPrevious('del')
  }

  // operator click handler
  function handleOperator(op) {
    console.log('Operator set:', op);

    const newSecondary = (previous === '=') ? '' : secondary;
    setSecondary(newSecondary);

    if (newSecondary !== '') calc(true, false);

    setOperator(op);
    setHold(true);

    setPrevious(`op-${op}`)
  }

  // "equals" click handler
  function handleEquals() {
    const shift = (previous === '=');
    calc(shift, shift)
    setPrevious('=');
  }

  // reset app state
  function reset() {
    console.log('Reset!');
    setPrimary('');
    setSecondary('');
    setOperator(false);
    setHold(false)
    setPrevious('');
  }  

  return (
    <ThemeContext.Provider value={theme}>
      <main className={`main theme-${theme}-main`}>
        <div className="calc">
          <Header setTheme={setTheme} />
          <Display value={primary} />
          <Keypad
            addChar={addChar}
            delChar={delChar}
            reset={reset}
            handleOperator={handleOperator}
            handleEquals={handleEquals}
          />
        </div>
      </main>
    </ThemeContext.Provider>
  );
}

export default App;
