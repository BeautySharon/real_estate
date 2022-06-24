import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async(url) => {
    const { data }  = await axios.get((url), {
        headers:{
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': '71e2817b56msh47a624d389f2c30p1ac09djsn0b47bdecacab',
        },
    });
    return data;
}
