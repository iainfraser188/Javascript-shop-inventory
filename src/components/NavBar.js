import React from 'react'
import { useNavigate } from 'react-router-dom'
import './css/nav-bar.css'
export const NavBar = () => {
     let goTo= useNavigate();


    return (
        <div className='nav-bar'>
        <div>
            <h1 className='title' onClick={()=>{
                goTo("/")
            }}>guitar shop</h1>
        </div>
        <div className='nav-bar-buttons'>
            <h1 onClick={() => {
                    goTo("/homePage")
                }} className='nav-button'>home</h1>

            <h1 onClick={() => {
                    goTo("/manufactures")
                }} className='nav-button'>Manufacturers</h1>    

            <h1 onClick={() => {
                    goTo("/guitars")
                }} className='nav-button'>Guitars</h1>      

            
        </div>
        </div>
    )
}
