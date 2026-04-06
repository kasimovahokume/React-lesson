
import { useState } from "react";

export const TempConverter =()=>{
  const [celsisus, setCelsius] = useState('');

  return(
    <div>
      <h3>Temperature Converter</h3>
      <form>
        <input type="text" />
      </form>
    </div>
  )
}
