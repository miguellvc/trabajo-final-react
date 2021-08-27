import axios from 'axios'

// const getData = () =>{
//     fetch("http://localhost:3001/api/touristSite/61268ee6ae047932f443e736")
//     .then(data => {return data.json()})
//     .then(res => console.log(res))
// }


// let obtener_cliente_id = async() => {
//     try {
//         const response = await axios({
//             method: 'get',
//             url: `http://localhost:3001/api/touristSite/61268561733dd32c9c79c30d`,
//             responseType: 'json'
//         });
//             console("respuesta del patch", response)
//         // return response;
//     } catch (error) {
//         console.log(error);
//     }
// };

const get = async (url, data) => {
    const request = {
        method: 'get',
        url: url,
        data: data,
        headers: {
            "Content-Type": "application/json"
        }
    }
    const res = await exec(request);
    // obtener_cliente_id()
   
    return res.data;
} 


const post = async (url, data) => {
    const request = {
        method: 'post',
        url: url,
        data: data,
        headers: {
            "Content-Type": "application/json"
        }
    }

    const res = await exec(request);
    return res.data;
}

const delet = async (url, data) => {
    const request = {
        method: 'delete',
        url: url,
        data: data,
        headers: {
            "Content-Type": "application/json"
        }
    }

    const res = await exec(request);
    return res.data;
} 

const patch = async (url, data) => {
    const request = {
        method: 'patch',
        url: url,
        data: data,
        headers: {
            "Content-Type": "application/json"
        }
    }

    const res = await exec(request);
    return res.data;
}

const exec = async (request) => {
    try{
        const response = await axios(request)
        return response
    }catch(err){
        console.error(err)
        throw Error(err)
    }
}

const client = {
    get: (url, data = {}) => get(url, data),
    post: (url, data = {}) => post(url, data),
    delete: (url, data = {}) => delet(url, data),
    patch: (url, data = {}) => patch(url, data) 
}

export default client;