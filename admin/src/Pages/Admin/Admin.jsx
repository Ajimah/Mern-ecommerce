//import React from 'react'
import Sidebar from '../../Components/Sidebar.jsx/Sidebar'
import'./Admin.css'
import {Routes , Route} from 'react-router-dom'
import Addproduct from '../../Components/Addproduct/Addproduct'
import Listproduct from '../../Components/Listproduct/Listproduct'


const Admin = () => {
  return (
    <div className="admin">
        <Sidebar/>
        <Routes>
            <Route path='addproduct' element = {<Addproduct/>}/>
            <Route path='listproduct' element = {<Listproduct/>}/>
        </Routes>
    </div>
  )
}

export default Admin