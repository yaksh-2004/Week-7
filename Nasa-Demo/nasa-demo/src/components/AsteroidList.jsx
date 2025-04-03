import React, { useEffect, useState } from "react";
import { fetchAsteroids } from "../services/fetchAsteroids";
import '../App.css'

const AsteroidList = () => {
  const [asteroids, setAsteroids] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedNeo, setSelectedNeo] = useState(null);
  //console.log(asteroids);
  

  useEffect(() => {
    const loadAsteroids = async () => {
      const data = await fetchAsteroids();
      setAsteroids(data);
      setLoading(false);
    };

    loadAsteroids();
  }, []);

  if (loading) {
    return <p className="text-center text-lg font-semibold">Loading...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Near Earth Objects Overview</h1>
      <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        {asteroids.map((asteroid) => (
          
            
          <li key={asteroid.id} className="clr p-4 border rounded-lg shadow-lg bg-gray-100 ">
            {console.log(asteroid)
            }
          
            <h2 className="text-xl font-semibold">{asteroid.name}</h2>
            <p>Close Approach Date: {asteroid.close_approach_data[0].close_approach_date}</p>
            <p>Miss Distance: {parseFloat(asteroid.close_approach_data[0].miss_distance.kilometers).toFixed(2)} km</p>
            <p>Velocity: {parseFloat(asteroid.close_approach_data[0].relative_velocity.kilometers_per_hour).toFixed(2)} km/h</p>
            <p>Diameter: {parseFloat(asteroid.estimated_diameter.meters.estimated_diameter_max).toFixed(2)} meters</p>
            <p className="text-red-500">
              Potentially Hazardous: {asteroid.is_potentially_hazardous_asteroid ? "Yes" : "No"}
            </p>
            <div key={asteroid.id} className="border p-2 rounded-lg bg-pink-600 shadow-md text-center cursor-pointer" onClick={() => setSelectedNeo(asteroid)}> More Info</div>
          </li>
        ))}
      </ul>

      {selectedNeo && (
    <div className="fixed inset-0 bg-black bg-opacity-35 flex items-center justify-center p-4 ">
           <div className="bg-pink-600 p-10 rounded-lg  w-1/2 relative text-xl text-white">
            <button className="absolute top-2 right-4 text-3xl text-white" onClick={() => setSelectedNeo(null)}>x</button>
            <h2 className="text-2xl font-bold mb-2">{selectedNeo.name}</h2>
            <p> Close Approach Date: {selectedNeo.close_approach_data[0]?.close_approach_date}</p>
            <p> Velocity: {selectedNeo.close_approach_data[0]?.relative_velocity.kilometers_per_hour} km/h</p>
            <p> Miss Distance: {selectedNeo.close_approach_data[0]?.miss_distance.kilometers} km</p>
            <p> Potentially Hazardous: {selectedNeo.is_potentially_hazardous_asteroid ? "Yes " : "No"}</p>
            <p> Absolute Magnitude: {selectedNeo.absolute_magnitude_h}</p>
            <p> Estimated Diameter: {selectedNeo.estimated_diameter.meters.estimated_diameter_min} - {selectedNeo.estimated_diameter.meters.estimated_diameter_max} meters</p>
            <p> Orbiting Body: {selectedNeo.close_approach_data[0]?.orbiting_body}</p>
            <p>
              <a href={selectedNeo.nasa_jpl_url} className="text-neutral-50 text-center bg-red-900 px-3 py-1 rounded-lg p-2">Click Here for more Details</a>
            </p>
        </div>
    </div>
)}
    </div> 
  );
  
  
};

export default AsteroidList;