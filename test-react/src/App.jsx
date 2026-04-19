
import { ReactHooks } from "./components/ReactHooks";
import "./styles/global.css";



export function App() {
  // const [friends,setFriends] = useState(["Cavid","hoku"])
  return (
    <>
    {/* <ProductForm/> */}
    {/* <RegisterForm/> */}
    {/* <UserManagement/> */}
    {/* <WindowTracker/> */}

    <ReactHooks/>
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







// import { useState } from "react";

// const GreetingNew = ({ name }) => {
//   return (
//     <div style={{ border: "1px solid blue", margin: "5px", padding: "10px" }}>
//       Salam, <b>{name}</b>! 🚀
//     </div>
//   );
// };

// export default function App() {
//   // 1. Siyahını OBYEKT formasında yaradırıq
//   const [friends, setFriends] = useState([
//     { id: 101, name: "Cavid" },
//     { id: 102, name: "Malik" },
//     { id: 103, name: "Hokume" }
//   ]);

//   return (
//     <div style={{ textAlign: "center" }}>
//       <h2>Obyekt Siyahısı</h2>

//       {/* 2. İndi SƏNİN yazdığın bu kod mükəmməl işləyəcək! */}
//       {friends.map((friend) => (
//         <GreetingNew 
//           key={friend.id} // Hər kəsin öz ID-si var
//           name={friend.name} // Hər kəsin öz adı var
//         />
//       ))}
//     </div>
//   );
// }