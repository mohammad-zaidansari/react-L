import { useState } from "react"

export default function MultipleInput(){

    let [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        dob: "",
        pass: ""
    });

    let handleInputChange = (event) => {
        // let feildName = event.target.name;
        // let newValue = event.target.value;
       
        // setFormData( (current) => {
        //     current[feildName] = newValue
        //     return {...current}
        // })
        setFormData( (current) => {
            return {...current, [event.target.name] : event.target.value}
        })
    };

    let submit = (event) => {
        event.preventDefault();
        setFormData({        // for reset all feilds 
        firstName : "",
        lastName : "",
        email : "",
        dob : "",
        pass : "",
        })
        console.log(formData);
    }



    return(
        <>
        <h2>Registration Form</h2>
        <form action="">
            <label htmlFor="firstName">First Name</label><br />
            <input type="text" placeholder="Enter first name" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange}/> <br /><br />
            <label htmlFor="lastName">Last Name</label><br />
            <input type="text" placeholder="Enter last name" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} /><br /><br />
            <label htmlFor="email">Email</label><br />
            <input type="email" placeholder="Enter your email" id="email" name="email" value={formData.email} onChange={handleInputChange}/><br /><br />
            <label htmlFor="dob">Date of birth</label><br />
            <input type="date" placeholder="Enter your DOB" id="dob" name="dob" value={formData.dob} onChange={handleInputChange}/><br /><br />
            <label htmlFor="pass">Password</label><br />
            <input type="password" placeholder="Set password" id="pass" name="pass" value={formData.pass} onChange={handleInputChange}/> <br /><br />
            <button onClick={submit}>Submit</button>
        </form>
        </>
    )
}