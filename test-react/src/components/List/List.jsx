import { useState } from "react";

   const CheckTask =()=>{
    const [email,setEmail]= useState("")
    const [phone,setPhone]= useState("")
    const [phoneMsg, setPhoneMsg] = useState("");
    const [emailMsg, setEmailMsg] = useState("");

    const emailAdd = (e)=>{
        setEmail(e.target.value)
    }
    const phoneAdd = (e)=>{
        setPhone(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();

        const emailRegex =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/

        if (!emailRegex.test(email)) {
            setEmailMsg("email dogru")
        } else {
            setEmailMsg("email yanlisdi")
        }

        if (!phoneRegex.test(phone)) {
            setPhoneMsg("telefon duz")
        }else{
            setPhoneMsg("telefon yanlis")
        }
    }
    return(
        <div>
            <h3>Formun yoxlanilmasi</h3>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input 
                    type="text"
                    value={email}
                    onChange={emailAdd}
                     />
                     <p>{emailMsg}</p>
                </div>
                <br />
                <div>
                    <label>Telefon:</label>
                    <input 
                    type="text"
                    value={phone}
                    onChange={phoneAdd}
                     />
                     <p>{phoneMsg}</p>
                </div>
                <br />
                <button type="submit">yoxla</button>
            </form>
        </div>
    )
}


export default CheckTask;