import React from 'react'
import { useState } from 'react';
import { NavBar } from './NavBar'
import ManufacturersService from '../services/ManufacturersService';
import { useNavigate } from 'react-router-dom'
import './css/Form.css'

export const ManufacturersForm = () => {

    const goTo = useNavigate();
    const form = document.getElementById('manufacturersForm')
    const createManufacturer = newManufacturer => {
        ManufacturersService.postManufacturers(newManufacturer);
    };

    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [established, setEstablished] = useState("");

    const handleNameChange = (ev) => setName(ev.target.value);
    const handleLocationChange = (ev) => setLocation(ev.target.value);
    const handleEstablishedChange = (ev) => setEstablished(ev.target.value);

    const handleClick = ev => {
        ev.preventDefault();
        createManufacturer({
          name: name,
          location: location,
          established: established
        });
        setName("");
        setLocation("");
        setEstablished("");
    
        
        form.reset();
        goTo('/manufactures');
      }

      return (
        <>
            <div>
               < NavBar/>
            </div>
            <div>
                <form onSubmit={handleClick} className='form' id="manufacturersForm" >
                    <label htmlFor='name'>Manufacturers Name</label>
                    <input type="text" name="name"  onChange={handleNameChange}></input>
                   
                    <label htmlFor='location'>Location</label>
                    <input type="text" name="location"  onChange={handleLocationChange}></input>
                   
                    <label htmlFor='established'>Established</label>
                    <input type="number" name="established" onChange={handleEstablishedChange}></input>
                    
                    <input onClick = {handleClick} className ="submit"type="submit" name='submit' value='Save'></input>
    
    
                </form>
            </div>
            </>
        )

}