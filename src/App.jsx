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

  const [result, setResult] = useState(399981);

  return (
    <ThemeContext.Provider value={theme}>
      <main className={`main theme-${theme}-main`}>
        <div className="calc">
          <Header setTheme={setTheme} />
          <Display value={result} />
          <Keypad />
        </div>
      </main>
    </ThemeContext.Provider>
  );
}

export default App;
