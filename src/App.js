
import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import "./sb-admin-2.min.css"
import Add from './Components/Add';
import { useState } from 'react';
import Edit from './Components/Edit';
import View from './Components/View';
import Portal from './Portal';
import Notfound from './Components/Notfound';
import { UserProvider } from './Components/UserContext';


function App() {
  const[Employee,setEmployee]=useState([

    {
        id:'1',
        name:"Sam",
        Age:"2000-03-12",
        email:'priyamuthukumar1203@gmail.com',
        num:'70985*****',
        job:"Front End Developer"
        
    },
    {
        id:'2',
        name:"Abi",
        Age:"1999-12-14",
        email:'abi1412@gmail.com',
        num:'74325*****',
        job:"UI/UX Designer"
        
    },
    {
        id:'3',
        name:"Sowmi",
        Age:"2004-10-24",
        email:'sowmi1203@gmail.com',
        num:'85325*****',
        job:"Backend Developer"
        
    }
])
  return (
  <>
  <BrowserRouter>
  <UserProvider>
  <Routes>
  <Route path='/' element={<Login/>}/>
  <Route path='*' element={<Notfound/>}/>
  <Route path='/portal' element={<Portal  Employee={Employee}/>}>
  <Route path='dashboard' element={<Dashboard Employee={Employee} setEmployee={setEmployee}/>}/>
  <Route path='add' element={<Add  Employee={Employee} setEmployee={setEmployee}/>}/>
  <Route path='edit/:id' element={<Edit Employee={Employee} />}/>
  <Route path='view/:id' element={<View Employee={Employee}/>}/>
  </Route>
  </Routes>
  </UserProvider>

  </BrowserRouter>
  </>
  );
}

export default App;
