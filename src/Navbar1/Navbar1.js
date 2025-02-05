import React from 'react'
import './Navbar1.css'
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Sidenav from '../Sidenav/Sidenav'



export default function Navbar1(){
    return(
        <>
        
       
        <div className='back'>
        {/* <BrowserRouter> */}
        
        
        <header>
        <Sidenav/>
        
            
        <img className="logo" src="https://www.creativefabrica.com/wp-content/uploads/2021/07/15/3d-Letter-S-Logo-Vector-Graphics-14751175-2-580x387.jpg"/>

        <div class="nav-bar">
            <nav>
               <ul className="nav_links">
                    <li><Link to="/Home">HOME</Link></li>
                    <li><Link to="/About">ABOUT</Link></li>
                    <li><Link to="/Companies">COMPANIES</Link></li>
                    <li><Link to="/Contact">CONTACT</Link></li>
                    

                </ul>
                
                
            </nav>
        </div>
        <div className='ctn'><FontAwesomeIcon icon={faBars} />

</div>
        </header>
       
        

        {/* <Routes>
            <Route path="/" element={<Navbar1/>}/>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            
            <Route path="/Companies" element={<Companies/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/Login" element={<Login/>}/>
            

        </Routes>
        
        
        </BrowserRouter> */}
        </div>
        
        </>
    )
}