import React, {useState, useEffect}from 'react'
import { AllManufactures } from '../components/AllManufactures'
import ManufacturersService from '../services/ManufacturersService'

export const ManufacturersContainer = () => {
    const [manufacturers, setManufacturers] = useState([])

    useEffect(() => {
        ManufacturersService.getManufacturers()
        .then(manufacturers => setManufacturers(manufacturers))
    }, [])

    return (
        <div>
            {/* <h1> welcome to the manufacturers page</h1> */}
            <AllManufactures manufacturers={manufacturers}/>
        </div>
    )
}
