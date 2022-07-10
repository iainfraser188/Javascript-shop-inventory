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
            <button className='title-button' onClick={handleButtonClick}>The G String</button>
        </div>
        </>
    )
}
