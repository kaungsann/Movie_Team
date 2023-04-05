import React from "react";

function Button(props) {
  return (
    <>
      <button
        onClick={props.function}
        className={`m-2 px-3 py-1 rounded-full border-spacing-1 border-2 bg-white text-black opacity-80 hover:opacity-100 `}>
        {props.text}
      </button>
    </>
  );
}

export default Button;
