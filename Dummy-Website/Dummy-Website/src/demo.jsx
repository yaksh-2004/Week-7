
// // src/api/spacexApi.js
// export async function fetchLaunches(limit = 10, offset = 0, filters = {}, sort = "") {
//     let url = `https://api.spacexdata.com/v3/launches?limit=${limit}&offset=${offset}`;
//     url += buildFilterQuery(filters);
//     if (sort) url += `&order=${sort}`;
//     const response = await fetch(url);
//     return response.json();
// }

// // src/api/filtersApi.js
// export function buildFilterQuery(filters) {
//     let query = "";
//     if (filters.status !== undefined) query += `&launch_success=${filters.status}`;
//     if (filters.dateRange === "past") {
//         const pastSixMonths = new Date(new Date().setMonth(new Date().getMonth() - 6)).toISOString();
//         query += `&start=${pastSixMonths}&end=${new Date().toISOString()}`;
//     } else if (filters.dateRange === "upcoming") {
//         const upcomingSixMonths = new Date(new Date().setMonth(new Date().getMonth() + 6)).toISOString();
//         query += `&start=${new Date().toISOString()}&end=${upcomingSixMonths}`;
//     }
//     return query;
// }

// // src/pages/Home.jsx
// import { useEffect, useState } from "react";
// import { fetchLaunches } from "../api/spacexApi";
// import { Link } from "react-router-dom";
// import Filters from "../components/Filters";
// import "../App.css";

// export default function Home() {
//     const [launches, setLaunches] = useState([]);
//     const [filters, setFilters] = useState({});
//     const [sort, setSort] = useState("desc");
//     const [currentPage, setCurrentPage] = useState(1);
//     const itemsPerPage = 10;

//     useEffect(() => {
//         fetchLaunches(itemsPerPage, (currentPage - 1) * itemsPerPage, filters, sort).then(setLaunches);
//     }, [filters, currentPage, sort]);

//     return (
//         <div className="container">
//             <Filters setFilters={setFilters} />
//             <label>Sort by Date:</label>
//             <select onChange={e => setSort(e.target.value)}>
//                 <option value="desc">Newest</option>
//                 <option value="asc">Oldest</option>
//             </select>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>No</th><th>Launched (UTC)</th><th>Location</th><th>Mission</th><th>Orbit</th><th>Launch Status</th><th>Rocket</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {launches.map((launch, index) => (
//                         <tr key={launch.flight_number}>
//                             <td>{index + 1}</td>
//                             <td>{new Date(launch.launch_date_utc).toLocaleDateString()}</td>
//                             <td>{launch.launch_site.site_name}</td>
//                             <td><Link to={`/launch/${launch.flight_number}`}>{launch.mission_name}</Link></td>
//                             <td>{launch.rocket.second_stage.payloads[0]?.orbit || "N/A"}</td>
//                             <td>{launch.launch_success ? "Success" : launch.upcoming ? "Upcoming" : "Failure"}</td>
//                             <td>{launch.rocket.rocket_name}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//             <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))}>Previous</button>
//             <button onClick={() => setCurrentPage(p => p + 1)}>Next</button>
//         </div>
//     );
// }

