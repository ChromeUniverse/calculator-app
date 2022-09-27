import React, { useContext } from "react";
import { ThemeContext } from "../App";

function Header({ setTheme }) {

  const theme = useContext(ThemeContext);

  const positions = [5, 28, 50];

  const style = {
    left: `${positions[theme-1]}px`
  }

  return (
    <header className="header">
      <p className={`header-logo theme-${theme}-header-logo`}>calc</p>

      <div className="header-switch">
        <p className={`header-switch-prompt theme-${theme}-header-switch-prompt`}>Theme</p>
        <div className={`header-switch-container theme-${theme}-header-switch-container`}>

          {/* actual visible toggle */}
          <div style={style} className={`header-switch-slider header-switch-toggle theme-${theme}-header-switch-toggle`}></div>

          {/* ghost slider positions */}
          <div
            className="header-switch-slider ghost ghost-1"
            onClick={() => setTheme(1)}
          ></div>
          <div
            className="header-switch-slider ghost ghost-2"
            onClick={() => setTheme(2)}
          ></div>
          <div
            className="header-switch-slider ghost ghost-3"
            onClick={() => setTheme(3)}
          ></div>

          {/* sslider position text indicators */}
          <div className="header-switch-positions">
            <p className={`header-switch-position theme-${theme}-header-switch-position`}>1</p>
            <p className={`header-switch-position theme-${theme}-header-switch-position`}>2</p>
            <p className={`header-switch-position theme-${theme}-header-switch-position`}>3</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
