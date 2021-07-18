import getEnvVars from "../../environment";

const {apiUrl} = getEnvVars();

export const fetchAgents = async () =>{
    try {
        const endpoint = `${apiUrl}/agents`
        const response = await fetch(endpoint);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error)
        return {count : 0}
    }
}

export const fetchWeapons = async () =>{
    try {
        const endpoint = `${apiUrl}/weapons`
        const response = await fetch(endpoint);
        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.log(error)
        return {count : 0}
    }
}


