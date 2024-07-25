import { useEffect } from "react";

export function RadioInput({ radioName, group,value, onChangeValue }) {
  const styleDiv = "has-[:checked]:border-lime-400 hover:bg-lime-200 font-semibold w-full py-2 flex items-center gap-2 border-2 my-2 rounded-md border-slate-400 hover:border-lime-400 transition duration-300";
  const styleDefault = "font-semibold hover:bg-lime-200 w-full py-2 flex items-center gap-2 border-2 my-2 rounded-md border-slate-400 hover:border-lime-400 transition duration-300"
  useEffect(()=>{
    const radioInp = document.querySelectorAll("input[type='radio']")
    radioInp.forEach(radio =>{
      if(value === "" && radio.checked){
        radio.checked = false
      }
    })
    
  },[value])
  return <label htmlFor={radioName} className={value === "" ? styleDefault : styleDiv}>
    <input
      type="radio"
      name={group}
      value={radioName}
      id={radioName}
      onChange={(e) => onChangeValue(e.target.value)} />{radioName}</label>;

}
