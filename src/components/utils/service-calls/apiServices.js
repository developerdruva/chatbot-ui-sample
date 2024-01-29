import axiosLoaderCall from "../api-utils/axiosLoaderCall";
import { CHATBOT_LOGIN } from "./APIUrls";

class apiServices {
    chatbotUserLogin(userData) {
        return axiosLoaderCall.post(CHATBOT_LOGIN, userData);
    }
}

let classObj = new apiServices();

export default classObj;