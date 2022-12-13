import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";

function Add({Employee,setEmployee}){
    const his=useNavigate();
    const myFormik=useFormik({
        initialValues:{
            name:"",
            email:"",
            Age:"",
            num:"",
            job:"",
            id:"",
        },
        validate:(values)=>{
            let errors={}
            if(!values.id){
                errors.id="Please enter a employee id"
            }
            if(!values.name){
                errors.name="Please enter a value"
            }
            else if(values.name.length<3){
                errors.name="Length should be higher than 3"
            }
            if(!values.email){
                errors.email="Please enter a email"
            }
            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Please enter a valid email address';
               }
            if(!values.Age){
                errors.Age="Please enter a age"
            }
            if(!values.num){
                errors.num="Please enter a contact number"
            }
            else if(values.num.length<10){
                errors.num="Contact number should be 10 numbers"
            }
            if(!values.job){
                errors.job="Please enter a Job Role"
            }
            return(errors);
        },
        onSubmit:(values)=>{
            console.log(values);
           setEmployee([...Employee,values])
           console.log(Employee)
            his("/portal/dashboard")
        },
    });
return(
    <>
<div className="container " style={{marginTop:"50px"}}>
   <form onSubmit={myFormik.handleSubmit}> 
   <div className="row">
   <div className="col-lg-4">
            <label>Employee Id</label>
            <input name="id" type={""} className= {`form-control  ${  myFormik.errors.id ?"is-invalid" :"is-valid" }` }value={myFormik.values.id}  onChange={myFormik.handleChange}/>
            <span style={{color:"red"}}>{myFormik.errors.id}</span>
        </div>
        <div className="col-lg-4">

            <label> Full Name</label>
            <input  name="name" type={"text"} className={`form-control  ${myFormik.errors.name ?"is-invalid" :"is-valid" }` } value={myFormik.values.name}
             onChange={myFormik.handleChange} 
              
              />
               <span style={{color:"red"}}>{myFormik.errors.name}</span>
             
        </div>
        <div className="col-lg-4">
            <label>E-Mail</label>
            <input name="email" type={"text"} className={`form-control  ${myFormik.errors.email ?"is-invalid" :"is-valid" }` }value={myFormik.values.email}  onChange={myFormik.handleChange}/>
            <span style={{color:"red"}}>{myFormik.errors.email}</span>
        </div>
       
        <div className="col-lg-4">
            <label>Date of Birth</label>
            <input name="Age" type={"date"} className={`form-control  ${myFormik.errors.Age ?"is-invalid" :"is-valid" }` }value={myFormik.values.Age}   onChange={myFormik.handleChange}/>
            <span style={{color:"red"}}>{myFormik.errors.Age}</span>
        </div>
        <div className="col-lg-4">
            <label>Contact Number</label>
            <input name="num" type={"phonenumber"}  className={`form-control  ${myFormik.errors.num ?"is-invalid" :"is-valid" }` }value={myFormik.values.num}   onChange={myFormik.handleChange}/>
            <span style={{color:"red"}}>{myFormik.errors.num}</span>
        </div>
        <div className="col-lg-4">
            <label>Job Title</label>
            <select name="job"  className={`form-control  ${myFormik.errors.job ?"is-invalid" :"is-valid" }` }value={myFormik.values.job}  onChange={myFormik.handleChange}>
                <option value={""}>----Select----</option>
                <option>Full Stack Developer</option>
                <option>Front end Developer</option>
                <option>Back End Developer</option>
                <option>UI/Ux Designer</option>
            </select>
            <span style={{color:"red"}}>{myFormik.errors.job}</span>
        </div>
        <div className="col-lg-3 mt-3">
        <input type="submit" style={{marginLeft:"30rem"}} value="Create"  className="btn btn-primary"></input>
       </div>
    </div>
   </form>
   
    {/* <pre> */}
    {/* <code>
    {JSON.stringify(myFormik.values)}
    </code> */}
    {/* <code>
    {JSON.stringify(myFormik.errors)}
    </code>
</pre> */}
</div>

   
    </>

)
    
}
export default Add;