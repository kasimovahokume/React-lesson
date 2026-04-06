import { useState } from "react"
import { isEmailValid } from "../../helpers/regex"
import { useFormik } from 'formik';
 
const initialFormState = {
    fullname: "",
    email: "",
    price:"0"
}

export const ProductForm =()=>{
     const formik = useFormik({
     initialValues: initialFormState,
     onSubmit: (values) => {
       console.log("form",values);
     },
   });
   console.log("formik",formik);
    return <div>
        <h1>Product Form</h1>
        <hr />

        <div>
            <label>Fullname</label>
            <input 
            value={formik.values.fullname}
            name="fullname"
            onChange={formik.handleChange}
             />
        </div>

        <div>
            <label>Email</label>
            <input 
            value={formik.values.email}
            name="email"
            onChange={formik.handleChange}
             />
        </div>

        <div>
            <label>Price</label>
            <input 
            name="price"
            value={formik.values.price}
            onChange={formik.handleChange}
             />
        </div>

        <button onClick={formik.handleSubmit}>
            Submit
        </button>
    </div>
}