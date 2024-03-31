import React, { forwardRef } from "react";

const PinInput = forwardRef((props, ref) => {
  const { handleChange, handleBackSpace, perInputBoxLength } = props;

  const handleKeyUp = (e) => {
    if (e.keyCode == 8) {
      handleBackSpace(e);
    } else {
      handleChange(e);
    }
  };

  return (
    <input
      type="text"
      ref={ref}
      maxLength={perInputBoxLength}
      onKeyUp={handleKeyUp}
    />
  );
});

export default PinInput;
