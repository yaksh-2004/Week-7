import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import { useEffect, useState } from "react";
//import { fetchLaunches } from "../api/spacexApi";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  const [launches, setLaunches] = useState([]);
  const [filteredLaunches, setFilteredLaunches] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [dateFilter, setDateFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Launches");
  const [paginatedata,setPaginateData]=useState([])
  const [offset,setOffset]=useState(0);
  console.log(currentPage);
console.log(paginatedata);
  


  useEffect(() => {
    const getdata=async()=>{

        if (statusFilter === "All Launches") {
        const {data} = await axios.get(`https://api.spacexdata.com/v3/launches`);
        setPaginateData(data)
        console.log("hi");
        
        }
        
        if (statusFilter === "successful") {
            const {data} = await axios.get(`https://api.spacexdata.com/v3/launches/?launch_success=true`);
            setPaginateData(data)
          }
          if (statusFilter === "failed") {
            const {data} = await axios.get(`https://api.spacexdata.com/v3/launches/?launch_success=false`);
            setPaginateData(data)
            setCurrentPage(1)
          }
          if (statusFilter === "upcoming") {
            const {data} = await axios.get(`https://api.spacexdata.com/v3/launches/upcoming`);
            setPaginateData(data)
            setCurrentPage(1)
          }
          if (dateFilter === "past") {
            const {data} = await axios.get(`https://api.spacexdata.com/v3/launches/past`);
            setPaginateData(data)
          }

    }
    getdata() 
        

    
      let filtered = [...launches];
      const now = new Date();
      const sixMonthsAgo = new Date();
      sixMonthsAgo.setMonth(now.getMonth() - 6);
      const sixMonthsLater = new Date();
      sixMonthsLater.setMonth(now.getMonth() + 6);

    //   if (dateFilter === "past") {
    //       filtered = filtered.filter(launch => {
    //           const launchDate = new Date(launch.launch_date_utc);
    //           return launchDate >= sixMonthsAgo && launchDate <= now;
    //       });
    //   } else if (dateFilter === "upcoming") {
    // //       filtered = filtered.filter(launch => {
    // //           const launchDate = new Date(launch.launch_date_utc);
    // //           return launchDate > now && launchDate <= sixMonthsLater;
    // //       });
    // //   }

       

      setFilteredLaunches(filtered);
    //   setCurrentPage(1);
  }, [dateFilter, statusFilter, launches,offset]);

  function previous(){
    setCurrentPage(currentPage - 1)
    setOffset(offset-10)
  }
  function next(){
    setCurrentPage(currentPage + 1)
    setOffset(offset+10)
  }

  const totalPages = Math.ceil(paginatedata.length / itemsPerPage);
  const currentLaunches = paginatedata.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);


  return (
    <div className="w-[100%]">
      <div className="p-4 box mt-5 text-center text-white">
        Welcome <br />
        {user && user.email}
      </div>
      <div className="d-grid gap-2">

          <Button variant="primary text-center m-auto" onClick={handleLogout} >
            Log out
          </Button>

      </div>
      <h1 className="text-xl font-bold ">SpaceX Explorer</h1>
         <div className="p-6 bg-gray-900 w-[100%] text-sky-400">
            <h1 className="text-3xl mb-4">SpaceX Launches</h1>
            
            <div className="mb-6 flex flex-wrap gap-4 bg-gray-800 p-4 rounded-lg">
                <div>
                    <label className="block">Filter by Date:</label>
                    <select value={dateFilter} onChange={e => setDateFilter(e.target.value)} className="p-2 bg-gray-700">
                        <option value="">All</option>
                        <option value="past">Past 6 Months</option>
                        <option value="upcoming">Upcoming 6 Months</option>
                    </select>
                </div>
                
                <div>
                    <label className="block">Filter by Status:</label>
                    <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)} className="p-2 bg-gray-700">
                        <option value="All Launches">All</option>
                        <option value="upcoming">Upcoming Launches</option>
                        <option value="successful">Successful Launches</option>
                        <option value="failed">Failed Launches</option>
                    </select>
                </div>
            </div>
            
            <table className="w-full text-left border-collapse mt-4">
                <thead>
                    <tr className="bg-gray-700">
                        <th>No</th><th>Launched (UTC)</th><th>Location</th><th>Mission</th><th>Orbit</th><th>Launch Status</th><th>Rocket</th>
                    </tr>
                </thead>
                <tbody>
                    {currentLaunches.map((launch, index) => (
                        <tr key={index} className="cursor-pointer hover:bg-gray-600">
                           
                            <td>{launch.flight_number}</td>

                            <td>{new Date(launch.launch_date_utc).toLocaleDateString()}</td>
                            <td>{launch.launch_site.site_name}</td>
                            <td><Link to={`/launch/${launch.flight_number}`} className="text-blue-400">{launch.mission_name}</Link></td>
                            <td>{launch.rocket.second_stage.payloads[0]?.orbit || "N/A"}</td>
                            <td>{launch.upcoming ? "Upcoming" : launch.launch_success ? "Success" : "Failure"}</td>
                            <td>{launch.rocket.rocket_name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="mt-4 flex justify-center space-x-2">
                <button disabled={currentPage === 1} onClick={previous} className="px-4 py-2 bg-gray-700 text-white disabled:opacity-50">Prev</button>
                <span>Page {currentPage} of {totalPages}</span>
                <button disabled={currentPage === totalPages} onClick={next} className="px-4 py-2 bg-gray-700 text-white disabled:opacity-50">Next</button>
            </div>
        </div>

    </div>
  );
};

export default Home;