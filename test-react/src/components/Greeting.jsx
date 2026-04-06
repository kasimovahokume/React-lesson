import { useState, useRef } from "react";

export default function AppNew() {
  const [friends, setFriends] = useState([
    { id: 1, name: "Cavid" },
    { id: 2, name: "Malik" }
  ]);

  const nameRef = useRef(null); // Pultumuz (useRef)

  const addFriend = () => {
    const newName = nameRef.current.value; // İnputdakı adı götürürük

    if (newName === "") return; // Boşdursa heç nə etmə

    // ƏN VACİB HİSSƏ BURADIR:
    const newFriend = { id: Date.now(), name: newName };

    // setFriends([...köhnələr, yenisi])
    setFriends([...friends, newFriend]); 

    nameRef.current.value = ""; // İnputu təmizləyirik
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Dost Əlavə Et</h2>

      <input ref={nameRef} type="text" placeholder="Ad yaz..." />
      <button onClick={addFriend}>Əlavə Et</button>

      <hr />

      {friends.map((friend) => (
        <div key={friend.id} style={{ padding: "5px", border: "1px solid gray", margin: "5px" }}>
          {friend.name}
        </div>
      ))}
    </div>
  );
}