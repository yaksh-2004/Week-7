export default function Filters({ filters, setFilters }) {
    return (
        <div className="p-4 bg-gray-800 text-white flex justify-around">
            <div>
                <h2 className="text-lg mb-2">Date Range</h2>
                <label className="mr-4">
                    <input type="radio" name="date" value="past" onChange={() => setFilters({ ...filters, dateRange: 'past' })} /> Past 6 months
                </label>
                <label>
                    <input type="radio" name="date" value="upcoming" onChange={() => setFilters({ ...filters, dateRange: 'upcoming' })} /> Upcoming 6 months
                </label>
            </div>
            <div>
                <h2 className="text-lg mb-2">Launch Type</h2>
                <label className="mr-4">
                    <input type="radio" name="launch" value="All Launches" onChange={() => setFilters({ ...filters, launchType: 'All Launches' })} /> All
                </label>
                <label className="mr-4">
                    <input type="radio" name="launch" value="upcoming" onChange={() => setFilters({ ...filters, launchType: 'upcoming' })} /> Upcoming
                </label>
                <label className="mr-4">
                    <input type="radio" name="launch" value="successful" onChange={() => setFilters({ ...filters, launchType: 'successful' })} /> Successful
                </label>
                <label>
                    <input type="radio" name="launch" value="failed" onChange={() => setFilters({ ...filters, launchType: 'failed' })} /> Failed
                </label>
            </div>
        </div>
    );
}


// export default function Filters({ setFilters }) {
//         return (
//             <div className="filters">
//                 <label>Filter by Date:</label>
//                 <select onChange={e => setFilters(f => ({ ...f, dateRange: e.target.value }))}>
//                     <option value="">All</option>
//                     <option value="past">Past 6 Months</option>
//                     <option value="upcoming">Upcoming 6 Months</option>
//                 </select>
//                 <label>Filter by Status:</label>
//                 <select onChange={e => setFilters(f => ({ ...f, status: e.target.value }))}>
//                     <option value="">All</option>
//                     <option value="true">Successful</option>
//                     <option value="false">Failed</option>
//                 </select>
//             </div>
//         );
//     }