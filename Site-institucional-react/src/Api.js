import axios from 'axios'

const Api = axios.create({
    baseURL: "https://62423a5cd126926d0c4f2c89.mockapi.io/music"
});

export default Api;