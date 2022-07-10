import React from 'react'
import { NavBar } from './NavBar'
import { SingleGuitar } from './SingleGuitar'

export const AllGuiters = ({guitars}) => {
    
    const guitarItem=guitars.map(guitar=>{
        return(
            <div>
                <SingleGuitar guitar={guitar} key={guitar._id}/>
            </div>
        )
    })
    return (
        <>
        <div>
            <NavBar/>
        </div>
        <div className='all-guitars-page'>
            <h1>all guitars go here</h1>
            {guitarItem}
        </div>
        </>
    )
}
