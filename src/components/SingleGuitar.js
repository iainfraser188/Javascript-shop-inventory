import React from 'react'
import './css/Guitars.css'

export const SingleGuitar = ({guitar}) => {

    function profit(){
        var stock = guitar.stockPrice;
        var retail = guitar.retailPrice;
        var profit = retail - stock;
        return profit;
    }
    return (
        <div className="single-guitar">
            <table>
  <tr>
    <th>Guitar type</th>
    <th>Stock Price (£)</th>
    <th>Retail Price (£)</th>
    <th>profit (£)</th>

  </tr>
  <tr>
    <td>{guitar.name}</td>
    <td>{guitar.stockPrice}</td>
    <td>{guitar.retailPrice}</td>
    <td>{profit()}</td>
  </tr>
</table>
            {/* <h1>{guitar.name}</h1>
            <details>
                <summary>
                    More Details
                </summary>
                <h3>Type:{guitar.type}</h3>
                <h3>Strings:{guitar.strings}</h3>
                <h3>Manufacturer:{guitar.manufacturer}</h3>
                <h3>Stock Price:{guitar.stockPrice}</h3>
                <h3>RetailPrice:{guitar.retailPrice}</h3>

            </details> */}
        </div>
    )
};