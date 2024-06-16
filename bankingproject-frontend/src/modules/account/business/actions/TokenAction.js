import TokenService from "../../../../TokenService";
import {loginService, registerService} from "../services/TokenService";

/**
 * Login action methodudur.
 *
 * @param {object} credential Login ekranından gelen kimlik bilgileridir.
 */
export const loginAction = (values) => {
    return async function (dispatch) {
        let res = await loginService(values);
        if (res != null && res.data != null) {
            TokenService.setToken("Bearer "+res.data.token);
            window.location.reload();
        }
    };
};

export const registerAction = (values) => {
    return async function (dispatch) {
        let res = await registerService(values);
        if (res != null && res.data != null) {
            TokenService.deleteToken();
            window.location.reload();
        }
    };
};

export const logoutAction = () => {
    return async function (dispatch) {
        TokenService.deleteToken();
        window.location.reload();
    };
};