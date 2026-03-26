import React from "react";

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  (props, ref) => {
    return <input ref={ref} {...props} />;
  }
);

Input.displayName = "Input";
export default Input;