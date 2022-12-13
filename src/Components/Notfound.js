import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

function Notfound() {
  return (
    <div>
  <img src='https://media.tenor.com/jsJTlDnYfeMAAAAi/404-not-found.gif' style={{marginLeft:"300px",marginTop:"50px"}}></img>
 <h2 style={{marginLeft:"300px",marginTop:"50px"}}>It looks like you found a glitch in the matrix...</h2>
 <Link to="/portal/dashboard">
        <Button variant="primary" style={{margin:"10px",marginLeft:"25rem"}}>Back</Button>
    </Link>
    </div>
  )
}

export default Notfound
