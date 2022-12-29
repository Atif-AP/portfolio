import React, { useState } from 'react';
import styles from "./Components.module.css"

const ColorBox = () => {
  const colors = ["red", "green", "blue", "yellow", "purple"];
  const [color, setColor] = useState(colors[0]);

  const nextColor = () => {
      const index = colors.indexOf(color);
      const nextIndex = index + 1 === colors.length ? 0 : index + 1;
      setColor(colors[nextIndex]);
  };

  return (
      <div className={styles.container}>
          <div style={{ backgroundColor: color, width: 100, height: 100 }} />
          <button onClick={() => nextColor()}>Next color</button>
      </div>
  );
}

export default ColorBox;