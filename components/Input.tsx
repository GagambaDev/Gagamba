import React from "react";

export default function Input({placeholder} : {placeholder: string}) {
  return (
    <input placeholder={placeholder}/>
  );
}