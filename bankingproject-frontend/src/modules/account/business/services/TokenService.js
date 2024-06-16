import {postRequest} from "../../../../HttpService";

export function loginService(values) {
    return postRequest("/users/login",values);
}

export function registerService(values) {
    return postRequest("/users/register",values);
}