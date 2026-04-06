import { useState } from "react";

export const UserManagement = () => {
  const [form, setForm] = useState({
    username: "",
    fullName: ""
  });

  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  // BÜTÜN MƏNTİQ BU FUNKSİYANIN İÇİNDƏ OLMALIDIR:
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.username || !form.fullName) {
      alert("Xanaları doldurun!");
      return;
    }

    const newUser = {
      ...form,
      id: Date.now()
    };

    setUsers([...users, newUser]);
    setForm({ username: "", fullName: "" });
  };

  const removeUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h2>User List Management</h2>
      
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input 
          name="username"
          placeholder="Username" 
          value={form.username} 
          onChange={handleChange} 
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <input 
          name="fullName"
          placeholder="Full Name" 
          value={form.fullName} 
          onChange={handleChange} 
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <button type="submit" style={{ cursor: "pointer" }}>Add User</button>
      </form>

      <hr />

      <table border="1" style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th style={{ padding: "10px" }}>Username</th>
            <th style={{ padding: "10px" }}>Full Name</th>
            <th style={{ padding: "10px" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} style={{ textAlign: "center" }}>
              <td style={{ padding: "10px" }}>{user.username}</td>
              <td style={{ padding: "10px" }}>{user.fullName}</td>
              <td style={{ padding: "10px" }}>
                <button 
                  onClick={() => removeUser(user.id)} 
                  style={{ backgroundColor: "red", color: "white", border: "none", padding: "5px 10px", cursor: "pointer", borderRadius: "4px" }}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {users.length === 0 && <p style={{ textAlign: "center", color: "gray" }}>Hələ heç bir istifadəçi əlavə edilməyib.</p>}
    </div>
  );
};