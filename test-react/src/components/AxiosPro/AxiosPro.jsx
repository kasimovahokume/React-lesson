import { useEffect, useState,useRef } from "react";
import { getUsers } from "../../services/userService";
import { Table } from "react-bootstrap";
// import axios from "axios";

export const ColorBack = () => {
const [datas,setDatas] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(()=>{
    getUsers()
    .then((response)=>{
        setDatas(response);
        setLoading(false);
    })
    .catch(()=>setLoading(false))
},[])
const getRoleStyle = (role) => {
    if (role === "admin") return { color: "blue", fontWeight: "bold" };
    if (role === "moderator") return { color: "red", fontWeight: "bold" };
    if (role === "user") return { color: "green" };
    return { color: "black" };
  };

  if (loading) return <h2>Yuklenir...</h2>

return(
    <div>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Ad</th>
          <th>Email</th>
          <th>Rol</th>
        </tr>
      </thead>
      <tbody>
        {datas.map((user, index) => (
          <tr key={user.id}>
            <td>{index + 1}</td>
            <td>{user.firstName}</td>
            <td>{user.email}</td>
            <td style={getRoleStyle(user.role)}>{user.role}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    </div>
)
};
























//  const inputRef = useRef(null);

//   useEffect(()=>{
//     inputRef.current.focus()
//   },[])

//     return(
//         <div style={{ padding: "50px", textAlign: "center" }}>
//       <h2>Giriş Səhifəsi</h2>
//       <input 
//         ref={inputRef} 
//         type="text" 
//         placeholder="Adiniz" 
//         style={{ padding: "10px" }}
//       />
//     </div>
//     )


// const colors = ["red", "blue", "purple", "green", "orange"];
//   const [index, setIndex] = useState(0);

//   useEffect(() => {

//     const interval = setInterval(() => {
//       setIndex((Index) => (Index + 1) % colors.length);
//     }, 2000);
//     return () => clearInterval(interval);
//   },[])

//   return (
//     <div
//       style={{
//        backgroundColor: colors[index],
//         height: "100vh",
//         transition: "background-color 0.5s ease",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center"
//       }}
//     >
//       <h1 style={{ textAlign: 'center', paddingTop: '50px' }}>Arxa fon rəngi: {colors[index]}</h1>
//     </div>
//   );



// export const AxiosPro = () =>{
//     const [users,setUsers] = useState([])
//     const [loading, setLoading] = useState(true)

//     useEffect(()=>{
//         axios.get('https://jsonplaceholder.typicode.com/users')
//         .then(response =>{
//             setUsers(response.data);
//             setLoading(false);
//         })
//         .catch(err=> console.log("Xeta verdi:", err))
//     },[]);

//     if (loading) return <h2>Yuklenir...</h2>

//     return(
//         <div>
//             <h1>Istifadeciler</h1>
//             <ul>
//                 {users.map((user) =>(
//                     <li key={user.id}>
//                         <strong>{user.name}</strong>
//                         <strong>{user.email}</strong>

//                     </li>

//                 ))}
//             </ul>
//         </div>
//     )
// }
