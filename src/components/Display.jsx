import React, { useContext } from 'react'

import { ThemeContext } from '../App';

function Display({value}) {

  const theme = useContext(ThemeContext);

  return (
    <div className={`display theme-${theme}-display`}>
      <p className={`display-text theme-${theme}-display-text`}>
        {value.toLocaleString()}
      </p>
    </div>
  );
}

export default Display