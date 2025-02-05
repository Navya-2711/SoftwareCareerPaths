import React from 'react'
import './Companies.css'
import Navbar1 from '../Navbar1/Navbar1'
import { Link,Route,RoutesBrowserRouter } from 'react-router-dom'
import Tcs from '../Tcs/Tcs'

export default function Companies(){
    return(
        <>
        <Navbar1></Navbar1>
        <div className='ccontainer'>
       <div className='company'><Link to="/Tcs"><img src="tcs1.jpg"/></Link></div>
       <div className='company'><Link to="/Acc"><img src="acc.png"></img></Link></div>
       <div className='company'><Link to="/Wipro"><img src="wipro.png"></img></Link></div>
       <div className='company'><Link to="/Infosys"><img src="infosys.jpg"></img></Link></div>
       <div className='company'><Link to="/Hcl"><img src="hcl.jpg"></img></Link></div>
       <div className='company'><Link to="/Ibm"><img src="ibm.png"></img></Link></div>
       <div className='company'><Link to="/Techmahindra"><img src="techmahindra.png"></img></Link></div>
       <div className='company'><Link to="/Capgemini"><img src="capgemini.png"></img></Link></div>
       <div className='company'><Link to="/Synopsys"><img src="synopsys.png"></img></Link></div>
       </div>


        </>
    )
}