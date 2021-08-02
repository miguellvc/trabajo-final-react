const host = process.env.REACT_APP_URL_HOST;

const routes = {
    path1: () => `${host}/`,
    path2: () => `${host}/resources`,
    path3: (id) => `${host}/resoures/${id}`,
    sample: () => `${host}/users?page=2`
}

export default routes;