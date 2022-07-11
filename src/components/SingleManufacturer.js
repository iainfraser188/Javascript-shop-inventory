import React from "react";

export const SingleManufacturer= ({manufacturer}) => {
    return (
        <div className="manufacturer-page">
            <h1>{manufacturer.name}</h1>
            <details>
                <summary>
                    More Details
                </summary>
                <h3>HQ Location:{manufacturer.location}</h3>
                <h3>EST:{manufacturer.established}</h3>
            </details>
            {/* <h3>{manufacturer.location}</h3>
            <h3>{manufacturer.established}</h3> */}

            
        </div>
    )
};
