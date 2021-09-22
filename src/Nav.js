import React, { useState, useEffect } from 'react'
import axios from './axios'
import requests from './request';

import MovieJoyLogo from "./Images/g96629.png";
import './Nav.css'

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500/";

const Nav = (props) => {
    const [show, handleShow] = useState(false);

    useEffect(() =>{
        window.addEventListener("scroll", () =>{
        if(window.scrollY > 100){
            handleShow(true);
        }   else handleShow(false);
        
    });
    return () => {
        window.removeEventListener("scroll");
    };
}, []);

    return(
        <div className={`nav ${show && "nav__black"}`}>
            <img
                className="nav__logo"
                src={MovieJoyLogo}
                alt="Movie Joy Logo"></img>
        </div>
    )
}

export default Nav