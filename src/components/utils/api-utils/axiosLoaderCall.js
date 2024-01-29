import axios from "axios";
import { reduxStore as store} from "../../redux/Store";

const axiosLoaderCall = axios.create();

axiosLoaderCall?.interceptors?.request?.use(config => {
    store?.dispatch({ type: 'SHOW_SPINNER' })
    return config;
}, (error) => {
    return Promise.reject(error);
});

axiosLoaderCall?.interceptors?.response?.use(config => {
    store?.dispatch({ type: 'HIDE_SPINNER' })
    return config;
}, (error) => {
    return Promise.reject(error);
});


export default axiosLoaderCall;
