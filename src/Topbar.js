import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
function Topbar() {
  return (
    <>
  
  <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                   
                    <button className="btn btn-outline-success" type="submit"><FontAwesomeIcon icon={faSearch} /></button>
                    
                </form>
                <div>
                   
                   
                    <Link className="btn btn-outline-success btn-sm" to="/">Logout</Link>
                </div>

            </div>
        </nav>
            </>
   
  )
}

export default Topbar
