import React, { Fragment, useContext, useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';
import{Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPenToSquare, faTrash, faUserMinus } from '@fortawesome/free-solid-svg-icons';
import UserContext from './UserContext';




function Dashboard({Employee}) {

  const his=useNavigate();

const handledelete=(id)=>{
  const alert=window.confirm(`DO you want to delete ${id}`)
if(alert){
  var index=Employee.map(function(el){
    return el.id

  }).indexOf(id);

  Employee.splice(index,1);
}
his("/portal/dashboard")
}


const userData=useContext(UserContext);
 
  return (
    <Fragment>
<h3 style={{margin:"30px"}}>Welcome {userData.user.name} </h3>
     <div style={{margin:"5rem"}}>
     <Table striped bordered hover>
        <thead>
         <tr>
           <th style={{textAlign:"center"}}>Id</th>
           <th style={{textAlign:"center"}}>Name</th>
           <th style={{textAlign:"center"}}>DOB</th>
           <th style={{textAlign:"center"}}>Email</th>
           <th style={{textAlign:"center"}}>Contact</th>
           <th style={{textAlign:"center"}}>Job Title</th>
           
           <th style={{textAlign:"center"}}>Actions</th>
         </tr>
        </thead>
        <tbody>
         {
           Employee && Employee.length>0
           ?
           Employee.map((e)=>{
             return(
               <tr>
                 <td>{e.id}</td>
                 <td>{e.name}</td>
                 <td>{e.Age}</td>
                 <td>{e.email}</td>
                 <td>{e.num}</td>
                
                 <td>{e.job}</td>
            
               <td>
                <Link to={`/portal/view/${e.id}`}>
                  <Button  size='sm' variant="secondary" style={{margin:"2px"}}>View <FontAwesomeIcon icon={faEye} style={{marginLeft:"3px"}}/></Button>
                </Link>
                 <Link to={`/portal/edit/${e.id}`}>
                 <Button  size='sm'variant="success" style={{margin:"2px"}} >Edit <FontAwesomeIcon icon={faPenToSquare} style={{marginLeft:"3px"}}/></Button>
                 </Link>
                 <Button size='sm' variant="danger" style={{margin:"2px"}} onClick={()=>handledelete(e.id)}>Delete <FontAwesomeIcon icon={faUserMinus} style={{marginLeft:"3px"}}/></Button>
                
               </td>
                 
                 
               </tr>
             )
           })
           :"No Data Available"
         }
        </tbody>
 
     </Table>
     <Link to="/portal/add">
     <Button style={{marginLeft:'450px'}} variant="primary" >Add Employee</Button>
     </Link>
     </div>
    </Fragment>
   )
}

export default Dashboard

