const API_URL = 'https://ergast.com/api/f1'

export async function fetchDriverStandings() {
    try{
        const response = await fetch(`${API_URL}/current/driverStandings.json`);
        if (!response.ok) {
            throw new Error(
                `HTTP ERROR: The status is ${response.status}`
            );
        }
        return await response.json();
    }catch(e){
        console.log(e)
        return []
    }
}

export async function fetchConstructorStandings() {
    try{
        const response = await fetch(`${API_URL}/current/constructorStandings.json`);
        if (!response.ok) {
            throw new Error(
                `HTTP ERROR: The status is ${response.status}`
            );
        }
        return await response.json();
    }catch(e){
        console.log(e)
        return []
    }
}






// const getDriverStandings = async () => {
//     const response = await fetch(`${API_URL}/current/driverStandings.json`);
//     const data = await response.json();

//     const driverData = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
//     // console.log(data.MRData.StandingsTable.StandingsLists[0].DriverStandings);
//     setDrivers(driverData)
// };