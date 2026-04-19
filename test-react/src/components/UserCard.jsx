
import React, { useState } from "react";

const CounterButton = React.memo(({ onClick, label }) => {
  console.log(`${label} düyməsi render olundu! `);
  return (
    <button onClick={onClick} style={{ margin: "10px" }}>
      {label}
    </button>
  );
});