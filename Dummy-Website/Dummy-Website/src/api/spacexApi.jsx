export const fetchLaunches = async () => {
    try {
        const response = await fetch('https://api.spacexdata.com/v3/launches');
        return await response.json();
    } catch (error) {
        console.error("Error fetching launches:", error);
        return [];
    }
};


// export async function fetchLaunches(limit = 10, offset = 0, filters = {}) {
//         let url = `https://api.spacexdata.com/v3/launches?limit=${limit}&offset=${offset}`;
//         if (filters.status) url += `&launch_success=${filters.status}`;
//         if (filters.dateRange) {
//             const now = new Date();
//             const pastSixMonths = new Date();
//             pastSixMonths.setMonth(now.getMonth() - 6);
//             const upcomingSixMonths = new Date();
//             upcomingSixMonths.setMonth(now.getMonth() + 6);
//             if (filters.dateRange === "past") url += `&start=${pastSixMonths.toISOString()}`;
//             if (filters.dateRange === "upcoming") url += `&start=${now.toISOString()}&end=${upcomingSixMonths.toISOString()}`;
//         }
//         const response = await fetch(url);
//         return response.json();
//     }

export const fetchLaunchById = async (id) => {
    try {
        const response = await fetch(`https://api.spacexdata.com/v3/launches/${id}`);
        return await response.json();
    } catch (error) {
        console.error("Error fetching launch details:", error);
        return null;
    }
};
