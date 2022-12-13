import React, { Fragment } from 'react'
import { ListGroup } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function View({Employee}) {
    const params=useParams();
    const index=Employee.findIndex((el)=>el.id==params.id);
    const list=Employee[index];
  return (
<Fragment>
<div className="container py-4 h-100 " style={{width:"30rem",marginTop:"80px"}}>
            <div className="row  justify-content-center align-items-center h-100 ">
<ListGroup>
    <h1 style={{marginBottom:"30px",textAlign:"center"}}>Employee Details</h1>
      <ListGroup.Item  variant="primary" style={{textAlign:"center",fontSize:"22px"}}> {list.name}</ListGroup.Item>
      <ListGroup.Item  style={{textAlign:"center",fontSize:"18px",fontFamily:"sans-serif"}}>E-mail: {list.email}</ListGroup.Item>
      <ListGroup.Item  style={{textAlign:"center",fontSize:"18px",fontFamily:"sans-serif"}}>DOB:{list.Age}</ListGroup.Item>
      <ListGroup.Item  style={{textAlign:"center",fontSize:"18px",fontFamily:"sans-serif"}}>Contact Number: {list.num}</ListGroup.Item>
      <ListGroup.Item  style={{textAlign:"center",fontSize:"18px",fontFamily:"sans-serif"}}>Job Title: {list.job}</ListGroup.Item>
    </ListGroup>
    <Link to="/portal/dashboard">
        <Button variant="primary" style={{margin:"10px",marginLeft:"25rem"}}>Back</Button>
    </Link>
    </div>
    </div>
</Fragment>
  )
}

export default View
