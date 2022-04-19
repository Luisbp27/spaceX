
const API_URL = 'https://api.spacexdata.com/v3';

export const getLaunches = async () => {
    try {
        const response = await fetch(`${API_URL}/launches`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

export const getLaunch = async (id) => {
    try {
        const response = await fetch(`${API_URL}/launches/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};