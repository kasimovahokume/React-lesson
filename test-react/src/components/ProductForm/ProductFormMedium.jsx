import { useState } from "react"
import { isEmailValid } from "../../helpers/regex"

const initialFormState = {
    fullname: "",
    email: "",
    price:"0"
}

export const ProductForm =()=>{

    const  [form, setForm]=  useState(initialFormState)

    const handleChange = (e)=>{
        const {name,value}= e.target

        setForm({
            ...form,
            [name]: value
        })
    }

console.log("rendering...");
    const handleSubmit = ()=>{

        //validation
        if (form.fullname.length<3) {
            alert("Fullname must be at least 3 caracters long")
            return
        }
         if (isEmailValid(form.email)== false) {
            alert("Email must be valid")
            return
        }
        if (form.price<=0) {
            alert("price must be greather than 0")
            return
        }

        console.log("form",form);

        setForm(initialFormState)
    }
    return <div>
        <h1>Product Form</h1>
        <hr />

        <div>
            <label>Fullname</label>
            <input 
            value={form.fullname}
            name="fullname"
            onChange={handleChange}
             />
        </div>

        <div>
            <label>Email</label>
            <input 
            value={form.email}
            name="email"
            onChange={handleChange}
             />
        </div>

        <div>
            <label>Price</label>
            <input 
            name="price"
            value={form.price}
            onChange={handleChange}
             />
        </div>

        <button onClick={handleSubmit}>
            Submit
        </button>
    </div>
}