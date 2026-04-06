import { useRef } from "react";

export const SecretInput = ()=>{
  const inputRef = useRef(null);

  const yaziniOxu = ()=>{
    alert("Yazdigin gizli soz:"+ inputRef.current.value);
    inputRef.current.style.borderColor = "red";
  }

  return(
    <div>
      <h2>useRef ilə Məlumat Oxumaq</h2>
      <input 
      type="text"
      ref={inputRef}
       />
       <button onClick={yaziniOxu}>Melumati Al</button>
    </div>
  )
}