import axiosLoaderCall from "../api-utils/axiosLoaderCall";
import { CHATBOT_LOGIN, DELETE_TODO, GET_ALLTODOS, GET_MYDEVELOPMENTS, TODO_ADD, UPDATE_TODO_ITEM } from "./APIUrls";

class apiServices {
    chatbotUserLogin(userData) {
        return axiosLoaderCall.post(CHATBOT_LOGIN, userData);
    }
    todoAdd(todoDesc) {
        return axiosLoaderCall.post(TODO_ADD, todoDesc);
    }
    getAllTodos() {
        return axiosLoaderCall.get(GET_ALLTODOS);
    }
    deleteTodo(itemId) {
        // return axiosLoaderCall.delete(DELETE_TODO + `/${itemid}`);
        return axiosLoaderCall.delete(DELETE_TODO, { params: { itemId: itemId } });
    }
    updateTodoItem(itemId, data) {
        return axiosLoaderCall.put(UPDATE_TODO_ITEM, {}, { params: { itemId: itemId, todoDesc: data } })
    }
    getMyDevelopments(){
        return axiosLoaderCall.get(GET_MYDEVELOPMENTS);

    }
}

// let classObj =

export default new apiServices();