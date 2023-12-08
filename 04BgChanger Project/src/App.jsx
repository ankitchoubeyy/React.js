import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("#31304D"); // Navy color

// Changing Color
  const maroon = () =>{
    setColor("#860A35")
  }
  const yellow = () =>{
    setColor("#F4CE14")
  }
  const blue = () =>{
    setColor("#0802A3")
  }
  const teal = () =>{
    setColor("#00A9FF")
  }
  const orange = () =>{
    setColor("#FF9209")
  }


  return (
    <>
      <div
        className="w-full h-screen pt-5 bottom-8"
        style={{ background: color }}
      >
        <div className="w-[80%] h-[5rem] mx-auto bg-slate-400 rounded-lg flex items-center justify-evenly">
          <button className="bg-[#860A35] h-[3rem] p-1 rounded w-[200px] text-white text-2xl" onClick={maroon}>
            Maroon
          </button>
          <button className="bg-[#F4CE14] h-[3rem] p-1 rounded w-[200px] text-white text-2xl" onClick={yellow}>
            Yellow
          </button>
          <button className="bg-[#0802A3] h-[3rem] p-1 rounded w-[200px] text-white text-2xl" onClick={blue}>
            Blue
          </button>
          <button className="bg-[#00A9FF] h-[3rem] p-1 rounded w-[200px] text-white text-2xl" onClick={teal}>
            Teal
          </button>
          <button className="bg-[#FF9209] h-[3rem] p-1 rounded w-[200px] text-white text-2xl" onClick={orange}>
            Orange
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
