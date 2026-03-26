import {JSX} from "react";

export default function SubmitButton({label, onClick}:{label: string, onClick?: () => void}): JSX.Element {
  return <button type={"submit"} className={"cursor-pointer"} onClick={onClick}>
    {label}
  </button>
}