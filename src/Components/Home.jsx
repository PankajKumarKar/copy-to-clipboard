import React, { useCallback, useEffect, useRef, useState } from "react";

const Home = () => {
  // State

  const [inputValue, setInputValue] = useState("");
  const [length, setLength] = useState(8);
  const [allowedNumber, setAllowedNumber] = useState(false);
  const [allowedSpecialChar, setAllowedSpecialChar] = useState(false);

  //Ref For show Selected Copy Data
  const inputRef = useRef(null);

  // Function to Generate random Password

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let charIndex = "";
    let str = "qwertyuiopasdfghjklzxcvbnm";
    if (allowedNumber) str += "123456789";
    if (allowedSpecialChar) str += "$%^&*()_+@!";
    for (let i = 1; i <= length; i++) {
      charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }
    setInputValue(pass);
  }, [length, allowedNumber, allowedSpecialChar, setInputValue]);

  const copyFromClipBoard = () => {
    inputRef?.current?.select();

    //If want Set range

    //inputRef.current.setSelectionRange(0, 5);

    window.navigator.clipboard.writeText(inputValue);
  };

  //For Re-Render If Dependency change
  useEffect(() => {
    passwordGenerator();
  }, [length, allowedNumber, allowedSpecialChar, setInputValue]);

  return (
    <div className="min-h-screen flex items-center justify-center flex-col">
      <div className="w-[40rem] h-60 bg-black p-4 rounded-md shadow-lg flex items-center justify-center gap-y-8 flex-col">
        <h1 className="font-bold text-blue-600 text-2xl">Password Generator</h1>
        <div className="flex items-center justify-center">
          <input
            type="text"
            className="p-[0.5rem] rounded-md text-black text-2xl"
            value={inputValue}
            readOnly
            ref={inputRef}
          />
          <button
            className="p-[0.8rem] bg-blue-700 rounded-md hover:bg-blue-800 font-semibold"
            onClick={copyFromClipBoard}
          >
            Copy
          </button>
        </div>
        <div className="flex gap-x-5 items-center justify-center">
          <input
            type="range"
            min={8}
            max={100}
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="hover:cursor-pointer"
          />{" "}
          <span className="text-lg font-medium">
            Length{" "}
            <span className="text-lg font-bold text-red-800">{length}</span>
          </span>
          <input
            type="checkbox"
            defaultChecked={allowedNumber}
            onChange={() => setAllowedNumber((prev) => !prev)}
          />{" "}
          <span className="text-lg font-medium">Numbers</span>
          <input
            type="checkbox"
            defaultChecked={allowedSpecialChar}
            onChange={() => setAllowedSpecialChar((prev) => !prev)}
          />{" "}
          <span className="text-lg font-medium">Special Characters</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
