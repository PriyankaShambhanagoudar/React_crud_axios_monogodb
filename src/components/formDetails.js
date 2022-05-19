import React from "react";
import classs from "./formDetas.module.css";
const FormDetails = (props) => {
 return (
  <form className={classs.form}>
   <h1>Form</h1>
   <div>
    <label htmlFor="FirstName ">FirstName</label>
    <input
     id="FirstName"
     type="text"
     placeholder="Enter FirstName"
     name="FirstName"
     value={props.userData.FirstName}
     onChange={props.handleUser}
    />
   </div>
   <div>
    <label htmlFor="LastName ">Last Name</label>
    <input
     id="LastName"
     type="text"
     placeholder="LastName"
     name="LastName"
     value={props.userData.LastName}
     onChange={props.handleUser}
    />
   </div>
   <div>
    <button type="submit" onClick={props.handleSubmit}>
     Submit
    </button>
   </div>
  </form>
 );
};

export default FormDetails;
