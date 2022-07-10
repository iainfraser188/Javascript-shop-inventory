import React from 'react'

export const SingleGuitar = ({guitar}) => {
    return (
        <div>
            <h1>{guitar.name}</h1>
            <details>
                <summary>
                    More Details
                </summary>
                <h3>Type:{guitar.type}</h3>
                <h3>Strings:{guitar.strings}</h3>
                <h3>Manufacturer:{guitar.manufacturer}</h3>
                <h3>Stock Price:{guitar.stockPrice}</h3>
                <h3>RetailPrice:{guitar.retailPrice}</h3>

            </details>
        </div>
    )
};