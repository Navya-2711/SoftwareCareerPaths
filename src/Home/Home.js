import React from 'react'
import './Home.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import About from '../About/About'
import Companies from '../Companies/Companies'
import Contact from '../Contact/Contact'
import Navbar from '../Navbar/Navbar'
import Login from '../Login/Login'
import Navbar1 from '../Navbar1/Navbar1'
export default function Home() {
    return (
        <>
           <Navbar1></Navbar1>
                <div className='hbody'>
                    <p className='phome'>CHOOSE YOUR<br /></p>
                    <p className='ps'> BEST SOFTWARE CAREER</p>
                </div>
            </>
            )
}