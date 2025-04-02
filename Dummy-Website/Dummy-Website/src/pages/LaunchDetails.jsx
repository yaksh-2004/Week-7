
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchLaunchById } from "../api/spacexApi.jsx";

export default function LaunchDetails() {
    const { id } = useParams();
    const [launch, setLaunch] = useState(null);

    useEffect(() => {
        fetchLaunchById(id).then(setLaunch);
    }, [id]);

    if (!launch) {
        return <div className="p-6 text-white">Loading...</div>;
    }

    return (
        <div className="p-6 bg-gray-900 min-h-screen text-white flex flex-col items-center">
            <h1 className="text-3xl mb-4">{launch.mission_name}</h1>
            <img src={launch.links.mission_patch} alt="Rocket" width={150} />
            <p><strong>Flight Number:</strong> {launch.flight_number}</p>
            <p><strong>Rocket Name:</strong> {launch.rocket.rocket_name}</p>
            <p><strong>Rocket Type:</strong> {launch.rocket.rocket_type}</p>
            <p><strong>Orbit:</strong> {launch.rocket.second_stage.payloads[0]?.orbit || "N/A"}</p>
            <p><strong>Launch Site:</strong> {launch.launch_site.site_name_long}</p>
            <p><a href={launch.links.wikipedia}>Wikipedia:</a> </p>
        </div>
    );
}
