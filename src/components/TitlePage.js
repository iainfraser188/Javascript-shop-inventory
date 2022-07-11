import React from 'react'
import { useNavigate } from 'react-router-dom'
import './css/TitlePage.css'



export const TitlePage = () => {
    let goTo = useNavigate ();

    const handleButtonClick = () =>{
        goTo('/homePage')
    };
    ;
    return (
        <>
        <div className='title-page'>
            <h3 className='instructions'>click title to enter</h3>

            <button className='title-button' onClick={handleButtonClick}>Guitar Shop</button>
        </div>
       
        </>
    )
}
