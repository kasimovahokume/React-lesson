import React, { useState, useCallback } from "react";

const UserList = React.memo(({ users }) => {
  console.log("UserList komponenti render oldu!");
  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>{user}</li>
      ))}
    </ul>
  );
});


export const ReactHooks = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [count, setCount] = useState(0);
  const users = [ "Cavid", "Fati", "Əli", "Aygün"];


  const getFilteredUsers = useCallback(() => {
    return users.filter((u) =>
      u.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]); 

  return (
    <div style={{ padding: "20px", border: "2px solid #4CAF50" }}>
      <h2>Birləşdirilmiş Tapşiriq (Task 5)</h2>
      
      <input
        type="text"
        placeholder="Ad axtar..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

  
      <UserList users={getFilteredUsers()} />

      <hr />
      <p>Digər State (Sayğac): {count}</p>
      <button onClick={() => setCount(count + 1)}>Səhifəni Render Et</button>
      
      <p style={{ color: "green" }}>
      </p>
    </div>
  );
};










// import { useState, useEffect, useMemo } from "react";

// export const ReactHooks = () => {
//   const [count, setCount] = useState(0);
//   const [items] = useState([1, 2, 3, 4, 5]);

//   const squaredNumbers = useMemo(() => {
//     console.log("Ağır hesablama aparılır...");
//     return items.map((num) => num * num);
//   }, [items]);
//   return (
//     <div>
//       <p>Hesablanmış rəqəmlər: {squaredNumbers.join(", ")}</p>
//       <button onClick={() => setCount(count + 1)}>
//         Sayğacı artır: {count}
//       </button>
//       <p>Sayğacı artıranda "Ağır hesablama..." yazısı konsola çıxmayacaq!</p>
//     </div>
//   );
// };

// import { useRef, useEffect } from "react"

// export const ReactHooks = () => {
//     const inputRef = useRef(null);

//     useEffect(()=>{
//         inputRef.current.focus();
//     },[]);
//     return(
//         <div>
//             <h3>Səhifə açılan kimi bura yaz:</h3>
//             <input
//             ref={inputRef}
//             type="text"
//              />
//         </div>
//     )
// }
