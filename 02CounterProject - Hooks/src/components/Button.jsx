import React from "react";

function Button(props) {
  return (
    <div>
      <button onClick={props.click} className="text-[20px] text-white bg-blue-700 hover:bg-sky-700 mr-4 mt-5 rounded-[10px] p-2">
        {props.name}
      </button>
    </div>
  );
}

export default Button;
