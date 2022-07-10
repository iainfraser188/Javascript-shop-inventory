import React from 'react'
import { NavBar } from './NavBar'
import { SingleManufacturer } from './SingleManufacturer.js.js';

export const AllManufactures = ({manufacturers}) => {
    const manufacturerItem=manufacturers.map(manufacturer=>{
        return(
            <div>
                <SingleManufacturer manufacturer={manufacturer} key={manufacturer._id}/>
            </div>
        )
    })
        return (
            <>
            <div>
                <NavBar/>
            </div>
          <div>
              {manufacturerItem}
             {<h1>All Manufacturers go here</h1>}
          </div>
          </>
        )
     
    };

