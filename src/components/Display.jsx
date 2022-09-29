import React, { useContext } from 'react'

import { ThemeContext } from '../App';

function Display({value}) {

  const theme = useContext(ThemeContext);

  return (
    <div className={`display theme-${theme}-display`}>
      <p className={`display-text theme-${theme}-display-text`}>
        {value[value.length-1] === '.' ? value : parseFloat(Number(value).toFixed(7))}
      </p>
    </div>
  );
}

export default Display