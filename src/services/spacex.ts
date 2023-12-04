import type { Doc, APISpaceXResponse } from "../types/api";


// Fetching de datos a api de SpaceX por id
export const getLaunchById = async ({id} : {id: string}) => {
    const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`)

    const launch = await res.json() as Doc
    
    return launch;
}

// Fetching de datos a api de SpaceX
export const getLatestLaunches = async () => {
    const res = await fetch("https://api.spacexdata.com/v5/launches/query", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify({
            query: {},
            options: {
                sort: {
                    date_unix: 'asc'
                },
                limit: 12
            },
        })
    })

    const { docs: launches } = await res.json() as APISpaceXResponse

    return launches;
}
