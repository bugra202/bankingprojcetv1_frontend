import {postRequest} from "../../../../HttpService";

export const moneyTransferService = (dto) => {
    const url = "/transactions/transfer";
    return postRequest(url, dto);
};

export function transferHistory(debugAccountId) {
    const url = `/transactions/account/${debugAccountId}`;
    return postRequest(url);
};