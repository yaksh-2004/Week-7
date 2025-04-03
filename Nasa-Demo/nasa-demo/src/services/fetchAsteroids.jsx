import { API_KEY, BASE_URL } from "../api/neows";

export const fetchAsteroids = async() => {
  try {
    const startDate = new Date().toISOString()
    const endDate = new Date(new Date().setDate(new Date().getDate() + 7))
      .toISOString()
console.log(startDate);


    const response = await fetch(`${BASE_URL}/feed?start_date=${startDate}&end_date=${endDate}&api_key=${API_KEY}`);

    
    if (!response.ok) {
      throw new Error("Failed to fetch asteroids");
    }

    const data = await response.json();
    //console.log(data.near_earth_objects);
    
    return Object.values(data.near_earth_objects).flat(); 
  } catch (error) {
    console.error("Error fetching asteroids:", error);
    return [];
  }
};