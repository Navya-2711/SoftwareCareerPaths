import React from 'react'
import './Interview.css'
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Sidenav from '../Sidenav/Sidenav'



export default function Interview(){
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
                    <li><Link to="/Mocktest">Mock test</Link></li>
                    <li><Link to="/About">HR Round</Link></li>
                    

                </ul>
                
                
            </nav>
        </div>
        <div className='ctn'><FontAwesomeIcon icon={faBars} />

</div>
        </header>
       
        

        </div>
        
        </>
    )
}