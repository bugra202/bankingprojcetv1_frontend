import {moneyTransferService, transferHistory} from "../services/transferService";

export const moneyTransferAction = (values) => {
    return async function (dispatch) {
        let res = await moneyTransferService(values);
        if (res != null && res.data != null) {
            dispatch({
                type: "NOTIFICATION_SUCCESS",
                payload: {data: "Para Transferi Başarıyla Gerçekleşmiştir."},
            });
            dispatch({
                type: "RELOAD_ACCOUNT",
                payload: {
                    ...res.data,
                },
            });
        }else
      {
            dispatch({
                type: "NOTIFICATION_ERROR",
                payload: {data: "Para Transferi Gerçekleştirilemedi!!."},
            });
        }
    };
};

export const searchTransferHistory = (debugAccountId) => {
    return async function (dispatch) {
        let res = await transferHistory(debugAccountId);
        const {...filters } = debugAccountId;
        if (res != null && res.data != null) {
            dispatch({
                type: "SEARCH_TRANSFER_HISTORY",
                payload: {
                    ...res.data,
                    filters: filters,
                },
            });
        }
    };
};