import React from "react";
const Cell = ({ isInitial, number, onchange }) => {
  return (
    <>
      <div
        onClick={(e) => {
          if (isInitial) {
            return;
          }
          onchange((number + 1) % 5);
        }}
        className={`cell ${isInitial ? "initial" : ""}`}
      >
        {number !== 0 ? number : ""}
      </div>
    </>
  );
};

export default Cell;
