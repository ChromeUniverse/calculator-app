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

  // operator index table
  // 
  // false -> no operation
  // 0     -> +
  // 1     -> -
  // 2     -> x
  // 3     -> /

  const [operator, setOperator] = useState(false);

  useEffect(() => {

    function handleKeyDown(event) {
      
    }

    window.addEventListener('keydown', handleKeyDown) 
  
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  }, [])

  function addChar(char) {    
    setPrimary(oldDisplay => oldDisplay + char.toString());
  }

  function delChar() {
    setPrimary(oldDisplay => oldDisplay.slice(0, oldDisplay.length-1));
  }

  function handleOperator(op) {
    console.log('Operator set:', op);
    setOperator(op);
    setSecondary(primary)
    setPrimary('')
  }

  function reset() {
    console.log('Reset!');
    setPrimary('');
    setSecondary('');
    setOperator(false)
  }

  function calc() {
    let result;
    const primaryNumber = Number(primary);
    const secondaryNumber = Number(secondary);

    if (operator === 0) result =  secondaryNumber + primaryNumber;
    if (operator === 1) result =  secondaryNumber - primaryNumber;
    if (operator === 2) result =  secondaryNumber * primaryNumber;
    if (operator === 3) result =  secondaryNumber / primaryNumber;

    console.log('Result is:', result);

    setPrimary(result.toString());
    setSecondary('')
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
            calc={calc}
          />
        </div>
      </main>
    </ThemeContext.Provider>
  );
}

export default App;
