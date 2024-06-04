// import React from 'react'
// import {useEffect,useState} from 'react'
// function SecondAPI () {
//     useEffect(
//         ()=>{
//             updateProducts();
//         },[]
//     )
//     let [products,setProducts]=useState([]);
    
//   async function updateProducts(){
//     const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${apiKey}`;
    
//     try {
//         const response = await fetch(apiUrl);
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error('Error fetching weather data:', error);
//     }

//   }
//   return (
//     <div>
//     </div>
//   )
// }

// export default SecondAPI 




import React, { useEffect, useState } from 'react';

function SecondAPI() {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        const lat = 40.7128; // Example latitude (e.g., New York City)
        const lon = -74.0060; // Example longitude (e.g., New York City)
        const part = 'minutely,hourly'; // Example parts to exclude (comma-separated)
        const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // Replace 'YOUR_OPENWEATHERMAP_API_KEY' with your actual API key
        
        async function updateProducts() {
            const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${apiKey}`;
        
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                console.log(data);
                setProducts(data); // Update state with fetched data
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        }
        
        
        updateProducts(); // Call the function on component mount
        
    }, []); // Empty dependency array means this effect runs only once on mount

    return (
        <div>
            {/* Render your weather data here */}
        </div>
    );
}

export default SecondAPI;

