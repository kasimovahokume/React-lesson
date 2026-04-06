
 import { useFormik } from 'formik';


export const RegisterForm = () => {
 const {values,errors,handleChange,handleSubmit} = useFormik({
     initialValues: {
       email: '',
       age: '',
       password:'',
       confirmPassword: ''
     },
   });
   console.log(values);
  return(
    <div>
        <form >
           <div>
             <label>Email</label>
            <input type="email"
            id='email'
            name="email"
            value={values.email}
            onChange={handleChange}
             />
           </div>
           <div>
             <label>Yas</label>
            <input type="number"
            name="age"
            id='age'
            value={values.age}
            onChange={handleChange}
             />
           </div>

           <div>
             <label>Sifre</label>
            <input type="password"
            name="password"
            id='password'
            value={values.password}
            onChange={handleChange}
             />
           </div>

            <div>
             <label>Sifre Tekrari</label>
            <input type="password"
            name="password"
            id='confirimPassword'
            value={values.confirmPassword}
            onChange={handleChange}
             />
           </div>
        </form>
    </div>
  )
  };
