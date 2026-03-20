import React from "react";

export default function Input({name, placeholder} : {name: string, placeholder: string}) {
  return (
    <textarea name={name} placeholder={placeholder}/>
  );
}