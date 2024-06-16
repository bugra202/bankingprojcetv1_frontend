import {deleteRequest, postRequest, putRequest} from "../../../../HttpService";

export function accountSearch(values) {
    return postRequest("/accounts/search",values);
}

export const accountSaveService = (dto) => {
    const url = "/accounts/save";
    return postRequest(url, dto);
};

export const accountUpdateService = (dto,id) => {
    const url = `/accounts/update/${id}`;
    return putRequest(url, dto);
};

export const deleteAccountService = (idList) => {
    const url = `/accounts/${idList}`;
    return deleteRequest(url);
};