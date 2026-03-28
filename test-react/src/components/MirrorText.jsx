import { useState } from "react";

export const CharCounter = () => {
  const [text, setText] = useState("");

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Mesajını yaz:</h2>
      
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Maksimum 20 simvol..."
      />

      <p>Yazdığın hərflərin sayı: {text.length}</p>

      {/* Bax, bura o sənin çətinlik çəkdiyin Məntiq hissəsidir */}
      {text.length > 20 ? (
        <h3 style={{ color: "red" }}>Limit aşılıb! ⚠️</h3>
      ) : (
        <h3 style={{ color: "green" }}>Yaza bilərsən... ✅</h3>
      )}
    </div>
  );
};