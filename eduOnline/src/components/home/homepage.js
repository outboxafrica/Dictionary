import React from "react";
import { Link } from 'react-router-dom';
import './style.css'
import Main from './main';
     
    const Homepage = () => {
        // <div className='container'> 
        return (
            <div className='container'>
                <div className='heading'>
                <span >Learn from any where on any device</span>
                </div>
                <div className ='head2'>
            <span className='head'>eduOnline </span>
             <div className='links'>
                    <Link  className='link'to='/'>Homepage</Link>
                    <Link className='link' to='/profilepage'>Profile</Link>
                    <Link className='link'to='/lookbookpage'>LookBook</Link>
                    <Link className='link' to='/logoutpage'>Logout</Link>
                    <Link className='link' to='/sign-in page'>Sign-in</Link>
                    <Link className='link' to='/log-in page'>Log-in</Link>
                    </div>
            </div>
             <span className="about">
          Outbox EDU leverages boot camps to train individuals with limited or
          no experience in software development.
        </span>
            
            <Main/>
            </div>
         
        
      )
    }
  
   

export default Homepage;
