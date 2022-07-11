import React, {useState, useEffect}from 'react'
import { AllManufactures } from '../components/AllManufactures'
import ManufacturersService from '../services/ManufacturersService'

export const ManufacturersContainer = () => {
    const [manufacturers, setManufacturers] = useState([])

    useEffect(() => {
        ManufacturersService.getManufacturers()
        .then(manufacturers => setManufacturers(manufacturers))
        
    })

    return (
        <div>
            <AllManufactures manufacturers={manufacturers}/>
        </div>
    )
}
