import "./styles/global.css";
import { UserCard } from "./components/UserCard";
import { useState } from "react";
import { MovieCard } from "./components/MovieCard";
import { CharCounter } from "./components/MirrorText";

export function App() {
  
  return (
    <>
    <CharCounter/>
    </>
  );
}

export default App;

// export function App() {

//   const [count, setCount] = useState(0);

//   const arttir = ()=>{
//     setCount(count + 1)
//   }
//   const azalt = ()=>{
//     if (count>0) {

//       setCount(count - 1)
//     }
//   }
//   console.log("compenet render edildi");
//   return (
//     <>
//     <div>{count}</div>
//     <div>
//       <button onClick={arttir}>
//         Arttir
//       </button>
//       <button onClick={azalt}>
//         Azalt
//       </button>
//     </div>
//     </>
//   );
// }

// export default App
