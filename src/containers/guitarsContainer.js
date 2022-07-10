import React, {useState, useEffect} from 'react'
import { AllGuiters } from '../components/allGuiters'
import GuitarsService from '../services/GuitarService'


export const GuitarsContainer = () => {
    const [guitars, setGuitars] = useState([])

    useEffect(()=>{
        GuitarsService.getGuitars()
        .then(guitars => setGuitars(guitars))
        .then(console.log(guitars))
    })
    return (
        <div>
            <AllGuiters guitars={guitars}/>
        </div>
    )
}
