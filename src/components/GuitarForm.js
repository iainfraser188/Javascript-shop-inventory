import React from 'react'
import { useState } from 'react';
import { NavBar } from './NavBar'
import GuitarsService from '../services/GuitarService';
import { useNavigate } from 'react-router-dom'
import './css/Form.css'


export const GuitarForm = () => {

        const goTo = useNavigate();
        const form = document.getElementById('guitarForm')
        const createGuitar = newGuitar => {
        GuitarsService.postGuitars(newGuitar);
        };

        const [name, setName] = useState("");
        const [guitarType, setGuitarType] = useState("");
        const [strings, setStrings] = useState("");
        const [manufacturer, setManufacturer] = useState("");
        const [stockPrice, setStockPrice] = useState("");
        const [retailPrice, setRetailPrice] = useState("");

        const handleNameChange = (ev) => setName(ev.target.value);
        const handleTypeChange = (ev) => setGuitarType(ev.target.value);
        const handleStringsChange = (ev) => setStrings(ev.target.value);
        const handleManufacturerChange = (ev) => setManufacturer(ev.target.value);
        const handleStockChange = (ev) => setStockPrice(ev.target.value);
        const handleRetailChange = (ev) => setRetailPrice(ev.target.value);
      


        const handleClick = ev => {
            ev.preventDefault();
            createGuitar({
              name: name,
              type: guitarType,
              strings: strings,
              manufacturer: manufacturer,
              stockPrice: stockPrice,
              retailPrice: retailPrice
            });
            setName("");
            setGuitarType("");
            setStrings("");
            setManufacturer("");
            setStockPrice("");
            setRetailPrice("");
            
            form.reset();
            goTo('/guitars');
          }
      

        


    
    return (
    <>
        <div>
           < NavBar/>
        </div>
        <div>
            <form onSubmit={handleClick} className='form' id="guitarForm" >
                <label htmlFor='name'>Guitar Name</label>
                <input type="text" name="name"  onChange={handleNameChange}></input>
               
                <label htmlFor='guitarType'>Guitar Type</label>
                <input type="text" name="guitarType"  onChange={handleTypeChange}></input>
               
                <label htmlFor='strings'>Number Of Strings</label>
                <input type="number" name="strings" onChange={handleStringsChange}></input>
                
                <label htmlFor='manufacturer'>Guitar Manufacturer</label>
                <input type="text" name = "manufacturer"  onChange={handleManufacturerChange}></input>
                
                <label htmlFor='stockPrice'>Stock Price</label>
                <input type="number" name="stockPrice"  onChange={handleStockChange}></input>
               
                <label htmlFor='retailPrice'>Retail Price</label>
                <input type="number" name = "retailPrice" onChange={handleRetailChange}></input>
               
                <input onClick = {handleClick} className ="submit"type="submit" name='submit' value='Save'></input>


            </form>
        </div>
        </>
    )
};