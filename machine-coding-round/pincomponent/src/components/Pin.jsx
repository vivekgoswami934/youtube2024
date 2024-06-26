import React, { useRef, useState } from "react";
import PinInput from "./PinInput";

const Pin = ({ length = 4, perInputBoxLength = 1, getThePinFn = () => {} }) => {
  const [inputBoxes] = useState(new Array(length).fill("")); // ["","","",""]

  const [inputBoxValue] = useState(new Array(length).fill("")); // ["1234","5678","",""]

  const inputRef = useRef([]); // ["input","input"] --> input -> element

  //   console.log(inputRef);
  const handleChange = (e, index) => {
    inputBoxValue[index] = e.target.value;

    if (
      index < length - 1 &&
      inputRef.current[index].value.length == perInputBoxLength
    ) {
      inputRef.current[index + 1].focus();
    }

    getThePinFn(inputBoxValue.join(""));
  };
  const handleBackSpace = (e, index) => {
    inputBoxValue[index] = e.target.value;

    if (index > 0 && e.target.value == "") {
      inputRef.current[index - 1].focus();
    }

    getThePinFn(inputBoxValue.join(""));
  };

  const handlePaste = (e) => {
    e.preventDefault();

    // const example = "abcdefghijklmnopqrstuvwxyz"  --> ["abc","def","ghi",...]

    const copyData = e.clipboardData
      .getData("text")
      .split("")
      .filter((_, index) => index < perInputBoxLength * length);

    // console.log(copyData);

    let value = [];

    for (let i = 0; i < length * perInputBoxLength; i += perInputBoxLength) {
      let str = "";
      for (let j = i; j < i + perInputBoxLength; j++) {
        str += copyData[j];
      }
      value.push(str);
    }

    console.log(inputRef);

    value.forEach((el, i) => {
      inputBoxValue[i] = el;

      inputRef.current[i].value = el;

      if (i < length - 1) {
        inputRef.current[i + 1].focus();
      }
    });
  };

  return (
    <div onPaste={handlePaste}>
      {inputBoxes.map((_, index) => (
        <PinInput
          type="text"
          key={index}
          ref={(inputRefElement) => (inputRef.current[index] = inputRefElement)}
          handleChange={(e) => handleChange(e, index)}
          handleBackSpace={(e) => handleBackSpace(e, index)}
          perInputBoxLength={perInputBoxLength}
        />
      ))}
    </div>
  );
};

export default Pin;
