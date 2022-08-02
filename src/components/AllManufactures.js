import React from 'react'
import { NavBar } from './NavBar'
import { SingleManufacturer } from './SingleManufacturer.js';
import { useNavigate } from 'react-router-dom';

export const AllManufactures = ({manufacturers}) => {

    const goTo  = useNavigate();
    const manufacturerItem=manufacturers.map(manufacturer=>{
        return (
            <div className="manufacturer-page">
                <h1>{manufacturer.name}</h1>
                <details>
                    <summary>
                        More Details
                    </summary>
                    <h3>HQ Location:{manufacturer.location}</h3>
                    <h3>EST:{manufacturer.established}</h3>
                </details>
                {/* <h3>{manufacturer.location}</h3>
                <h3>{manufacturer.established}</h3> */}
    
                
            </div>
        )
    })
        return (
            <>
            <div>
                <NavBar/>
            </div>
            <div className='formButton'>
            <button className='addManufacturerButton' onClick={() => {
                    goTo("/manufacturersForm")}}>Add Manufacturer</button>
        </div>
          <div>
              {manufacturerItem}
             {/* {<h1>All Manufacturers go here</h1>} */}
          </div>
          </>
        )
     
    };

