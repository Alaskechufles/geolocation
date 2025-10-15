import React, { useEffect, useState } from 'react'

export default function LocationComponent() {
    const [location,setLocation] = useState({lat:13.9898,lon:23.98896})

    /* useEffect(()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            setLocation({
                lat:position.coords.latitude,
                lon:position.coords.longitude
            })
        })
    },[]) */

    function getLocation() {
        navigator.geolocation.getCurrentPosition((position)=>{
            setLocation({
                lat:position.coords.latitude,
                lon:position.coords.longitude
            })
        })
    }

  return (
    <div>
        <h1>LocationComponent</h1>
        <button onClick={getLocation}>Get Location</button>
        <p>latitude: {location.lat}</p>
        <p>longitude: {location.lon}</p>
    </div>
  )
}
