import { useState } from "react"
import { isEmailValid } from "../../helpers/regex"

export const ProductForm =()=>{

    const  [fullname, setFullname]= useState('')
    const  [email, setEmail]= useState('')
    const  [price, setPrice]= useState("0")
    const  [form, setForm]=  useState({
        fullname: '',
        email: '',
        price: "0"
    })


console.log("rendering...");
    const handleSubmit = ()=>{

        //validation
        if (fullname.length<3) {
            alert("Fullname must be at least 3 caracters long")
            return
        }
         if (isEmailValid(email)== false) {
            alert("Email must be valid")
            return
        }
        if (price<=0) {
            alert("price must be greather than 0")
            return
        }
        const data = {
            fullname,
            email,
            price
        }

        console.log("data",data);
    }
    return <div>
        <h1>Product Form</h1>
        <hr />

        <div>
            <label>Fullname</label>
            <input 
            value={fullname}
            onChange={(e)=>setFullname(e.target.value)}
             />
        </div>

        <div>
            <label>Email</label>
            <input 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
             />
        </div>

        <div>
            <label>Price</label>
            <input 
            value={price}
            onChange={(e)=>setPrice(e.target.value)}
             />
        </div>

        <button onClick={handleSubmit}>
            Submit
        </button>
    </div>
}