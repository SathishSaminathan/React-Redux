import React, { useState } from 'react'
import './Hotels.css'

function Hotels({hotelDetails}){
    // console.log(hotelDetails.veg)
    return(
        <div className="hotelContainer"> Hotal Name: {hotelDetails.name} Veg:{hotelDetails.veg ? "available": 'notavailable'}</div>
    )
}

export default Hotels