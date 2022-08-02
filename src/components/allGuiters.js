import React from 'react'
import { NavBar } from './NavBar'
import { SingleGuitar } from './SingleGuitar'
import { useNavigate } from 'react-router-dom'

import './css/Guitars.css'

export const AllGuiters = ({guitars}) => {
    
    let goTo= useNavigate();

    // const guitarItem=guitars.map(guitar=>{

       
    //     return (
           
    //     <td>{guitar.name}</td>
    //     <td>{guitar.stockPrice}</td>
    //     <td>{guitar.retailPrice}</td>
    //     <td>{profit()}</td>
        
    
               
         
    //     )
    // })
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
    
        <table >
            <thead>
            <tr>
            <th>Guitar Name</th>
            <th>Guitar Type</th>
            <th>Stock Price (£)</th>
            <th>Retail Price (£)</th>
            <th>profit (£)</th>
            </tr>
            </thead>
            <tbody>
                {guitars.map(guitar=>{
            function profit(){
                var stock = guitar.stockPrice;
                var retail = guitar.retailPrice;
                var profit = retail - stock;
                return profit;
            }

            return (
            <tr>
            <td>{guitar.name}</td>
            <td>{guitar.type}</td>
            <td>{guitar.stockPrice}</td>
            <td>{guitar.retailPrice}</td>
            <td>{profit()}</td>
            </tr>

                
            
            )
            })} </tbody>
        </table>
        
            
         </div>
        </>
    )
};
