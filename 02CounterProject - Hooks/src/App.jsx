import { useState } from "react"; // step 1: import the useState()
import Button from "./components/Button";
import Navbar from "./components/Navbar";

function App(props) {
  const [counter, setCounter] = useState(0); //  step 2: Initialize the counter by 0.

  // step 3: setCounter() for different events.

  // Add value button
  const addValue = () => {
    console.log("Increased", counter);
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  // Subtract value button
  const removeValue = () => {
    console.log("Decreased", counter);
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <Navbar />
      <div className="text-center max-w-[70%] mx-auto mt-[100px]">
        <h1 className="text-4xl">Count : {counter} </h1>

        <div className="text-center flex justify-center">
          <Button name="Add value" click={addValue} />
          <Button name="Remove value" click={removeValue} />
        </div>
      </div>
    </>
  );
}

export default App;
