import React, { useEffect, useState } from 'react'

export default function IPLocation() {
    const [ip, setIP] = useState({})
    const [location, setLocation] = useState({})

    useEffect(() => {
        getIP();
    }, [])
    useEffect(() => {
        getLocationByIP(ip.ip)
    }, [ip])

    async function getIP() {
        try {
            const response = await fetch('https://api.ipify.org?format=json');
            const data = await response.json();
            console.log(data);
            setIP(data)
        } catch (error) {
            console.error('Error al obtener IP:', error);
        }
    }

    async function getLocationByIP(ip) {
        try {
            const response = await fetch(`https://api.ipinfo.io/lite/${ip}?token=52256b72ffcfc5`);
            const data = await response.json();
            console.log(data);
            setLocation(data)
        } catch (error) {
            console.error('Error al obtener la ubicación por IP:', error);
        }
    }    


  return (
    <div>
        <h2>IPLocation</h2>
        <p>{ip.ip}</p>

        <h2>IPLocation</h2>
        <p>País: {location.country}</p>
        <p>Continente: {location.continent}</p>
    </div>
  )
}
