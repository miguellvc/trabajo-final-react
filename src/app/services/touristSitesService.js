import routes from '../rest/routes';
import client from '../rest/client';

export const getAllTouristSite = async () => {
    const data = await client.get(routes.getAllTouristSite());
    return data.touristSite;
}

export const getTouristSite = async (id) => {
    const data = await client.get(routes.getTouristSite(id));
    // console.log("console desde toutist service", data);
    return data.touristSite;
}