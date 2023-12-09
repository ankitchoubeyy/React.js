import { useState, useCallback, useEffect, useRef} from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(0);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState(" ");
  const passwordRef = useRef(null);

  // Note: useCallback(fn,dependencies) -->> It takes two parameters i) function, ii) Dependencies (optional)

  // useRef Hook

  const passwordGenerator = useCallback(() => {
    let pass = " ";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "!@#$%^&*(){}~";
    }

    // Generating password
    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard  = useCallback(() => {
    window.navigator.clipboard.writeText(password)  // This will copy password to clipboard
  },[password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="max-w-[60%] my-[130px] mx-auto shadow-md rounded-lg px-4 py-8 text-white bg-[#7743DB]">
        <h1 className="text-center text-3xl mb-5">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 text-black"
            placeholder="password"
            readOnly
            ref={passwordRef} // Reference of password successfully passed
          />
          {/* copy button  */}
          <button className="outline-none  px-3 py-0.5 shrink-0 glow-on-hover"
          onClick={copyPasswordToClipboard}>
            Copy
          </button>
        </div>
        <div className="flex  gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={40}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Password Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="numberInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
