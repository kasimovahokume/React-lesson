// import { useState } from "react";
// import styles from "./Pokemon.module.css"
// export const PokemonApp = ()=>{
//     const [cart,setCart] = useState([]);
//     const [name,setName] = useState("");
//     const [url,setUrl] = useState("");

//     const PokemonName = (e)=>{
//         setName(e.target.value)
//     }

//     const PokemonUrl = (e) =>{
//         setUrl(e.target.value)
//     }

//     const handleAdd = (e)=>{
//         e.preventDefault();

//         if(name=== "" || url==="") return;

//         const newPokemon = {
//             id: Date.now(),
//             name: name,
//             image: url
//         }

//         setCart([...cart,newPokemon]);
//         setName("");
//         setUrl("");
//     }
//     const removePokemon = (id)=> {
//         const updatedCart = cart.filter((item) => item.id !== id);
//     setCart(updatedCart);
//     }
//     return(
//         <div className={styles.pokemonContainer}>
//             <form 
//             className={styles.pokemonForm}
//             onSubmit={handleAdd}>
//                 <h1>Add Pokemon Cart</h1>

//                 <input 
//                 type="text"
//                 placeholder="Pokemon name"
//                 value={name}
//                 onChange={PokemonName}
//                  />
//                  <br />

//                  <input 
//                  type="text"
//                  placeholder="Pokemon image url"
//                  value={url}
//                  onChange={PokemonUrl}
//                   />
//                   <br />

//                   <button 
//                   className={styles.addBtn}
//                   type="submit">Add to Cart</button>
//             </form>
//             <hr />
//             <h2>Your Carts</h2>
            
//             {cart.length === 0 ? (
//                 <p>No pokemon in the cart yet.</p>
//             ) : (
//                 <div className={styles.cartsList}>
//                     {cart.map((item)=>(
//                         <div 
//                         key={item.id}
//                         className={styles.pokemonCard}
//                         >
//                             <img src={item.image} alt={item.name} />
//                             <h4>{item.name}</h4>
//                             <button
//                             className={styles.removeBtn}
//                              onClick={()=>removePokemon(item.id)}>Remove</button>
//                         </div>
//                     ))}
//                 </div>
//             )
//         }
//         </div>
//     )

// }



// task3

// import { useState } from "react";

// export const PasswordCheck =()=>{

//     const [passwordList,setPasswordList] = useState([]);
//     const [pass,setPass] = useState("");
//     const [error, setError] = useState("");


//     const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{5,10}$/;

//     const handleSubmit = (e) =>{
//         e.preventDefault();

//         if (passRegex.test(pass)) {
//             setPasswordList([...passwordList, pass]);
//             setPass("");
//             setError("");
//         }else {
//             setError("Invalid password");
//         }

//     }

//     return(
//         <div style={{padding: "20px"}}>
//             <h1>Password Validation</h1>

//             <form onSubmit={handleSubmit}>
//                 <input 
//                 type="password"
//                 placeholder="Enter password"
//                 value={pass}
//                 onChange={(e)=> setPass(e.target.value)}
//                  />
//                  <button type="submit">Submit</button>
//             </form>
//             {error && <p style={{color: "red"}}>{error}</p>}
//             <hr />

//             <div>
//                 <h2>Valid Passwords:</h2>
//                 <ul>
//                     {passwordList.map((item, index)=>(
//                         <li key={index}>{item}</li>
//                     ))}
//                 </ul>
//             </div>

//         </div>
//     )
// }


// import { useFormik } from 'formik';

// export const FormikTask = () => {
//   const formik = useFormik({
//     initialValues: {
//       firstName: '',
//       age: '',
//       acceptedTerms: false,
//     },
//     // Yoxlama məntiqi (Validation)
//     validate: (values) => {
//       const errors = {};

//       if (!values.firstName) {
//         errors.firstName = 'Required';
//       } else if (values.firstName.length < 5 || values.firstName.length > 20) {
//         errors.firstName = 'Must be between 5 and 20 characters';
//       }

//       if (!values.age) {
//         errors.age = 'Required';
//       } else if (isNaN(values.age) || values.age < 1) {
//         errors.age = 'Must be a positive number';
//       }

//       if (!values.acceptedTerms) {
//         errors.acceptedTerms = 'You must accept the terms';
//       }

//       return errors;
//     },
//     // Form uğurla göndərildikdə
//     onSubmit: (values) => {
//       console.log('Submitted Data:', values);
//       alert('Form submitted! Check console.');
//     },
//   });

//   return (
//     <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto', fontFamily: 'Arial' }}>
//       <h1>Formik Task 1</h1>
//       <form onSubmit={formik.handleSubmit}>
        
//         {/* First Name Field */}
//         <div style={{ marginBottom: '15px' }}>
//           <label htmlFor="firstName">First Name:</label>
//           <input
//             id="firstName"
//             name="firstName"
//             type="text"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur} // İstifadəçi inputdan çıxanda yoxlayır
//             value={formik.values.firstName}
//             style={{ display: 'block', width: '100%', padding: '8px', marginTop: '5px' }}
//           />
//           {formik.touched.firstName && formik.errors.firstName ? (
//             <div style={{ color: 'red', fontSize: '12px' }}>{formik.errors.firstName}</div>
//           ) : null}
//         </div>

//         {/* Age Field */}
//         <div style={{ marginBottom: '15px' }}>
//           <label htmlFor="age">Age:</label>
//           <input
//             id="age"
//             name="age"
//             type="text"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.age}
//             style={{ display: 'block', width: '100%', padding: '8px', marginTop: '5px' }}
//           />
//           {formik.touched.age && formik.errors.age ? (
//             <div style={{ color: 'red', fontSize: '12px' }}>{formik.errors.age}</div>
//           ) : null}
//         </div>

//         {/* Terms Field */}
//         <div style={{ marginBottom: '15px' }}>
//           <label>
//             <input
//               name="acceptedTerms"
//               type="checkbox"
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               checked={formik.values.acceptedTerms}
//             />
//             {' '} I agree to the terms and conditions
//           </label>
//           {formik.touched.acceptedTerms && formik.errors.acceptedTerms ? (
//             <div style={{ color: 'red', fontSize: '12px' }}>{formik.errors.acceptedTerms}</div>
//           ) : null}
//         </div>

//         <button 
//           type="submit" 
//           style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };