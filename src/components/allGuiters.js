import React from 'react'
import { NavBar } from './NavBar'
import { SingleGuitar } from './SingleGuitar'
import { useNavigate } from 'react-router-dom'

import './css/Guitars.css'

export const AllGuiters = ({guitars}) => {
    
    let goTo= useNavigate();

    const guitarItem=guitars.map(guitar=>{

        return(
            <div>
                <SingleGuitar guitar={guitar} key={guitar.id}/>
            </div>
        )
    })
    return (
        <>
        <div>
            <NavBar/>
        </div>
        <div className='formButton'>
            <button className='addGuitarButton' onClick={() => {
                    goTo("/guitarForm")}}>Add Guitar</button>
        </div>
        <div className='all-guitars-page'>
            {guitarItem}
        </div>
        </>
    )
};
