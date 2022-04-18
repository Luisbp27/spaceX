
const API_URL = 'https://api.spacexdata.com/v3';

export const getLaunches = async () => {
    try {
        const response = await fetch(`${API_URL}/launches`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const getLaunch = async (flight_number) => {
    try {
        const response = await fetch(`${API_URL}/launches/${flight_number}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}