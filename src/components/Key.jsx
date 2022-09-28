import React, { useContext } from "react";
import { ThemeContext } from "../App";

function Key({ text, type = 0, area = "", onClick }) {

  const theme = useContext(ThemeContext);

  return (
    <div
      className={`
        key theme-${theme}-key
        ${type === 1 ? `key-type-1 theme-${theme}-key-type-1` : ""}
        ${type === 2 ? `key-type-2 theme-${theme}-key-type-2` : ""}
        ${area !== "" ? `key-area-${area}` : ""}
      `}
      onClick={onClick}
    >
      <p className="key-text">{text}</p>
    </div>
  );
}

export default Key;
