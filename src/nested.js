import React from 'react'
import {Link,Outlet} from "react-router-dom"
import './style.css';

 const Nested = () => {
  return (
    <div className='pro'>

        <ul className='ani'>
        <Link to="profile">
            <li>
                <div >tiger</div>
            </li>
            </Link>

            <Link to="about">
            <li>
                <div>dog</div>
            </li>
            </Link>

            <Link to="product">
            <li>
                <div>cat</div>
            </li>
            </Link>

            <Link to="service">
            <li>
                <div>Eliphant</div>
            </li>
            </Link>

            
           
        </ul>
        <Outlet/>
    </div>
  )
}

export default Nested