import {
    accountSaveService,
    accountSearch,
    accountUpdateService,
    deleteAccountService
} from "../services/accountService";

export const searchAccount = (values) => {
    return async function (dispatch) {
        let res = await accountSearch(values);
        const {...filters } = values;
        if (res != null && res.data != null) {
            dispatch({
                type: "SEARCH_HESAP_PLANI",
                payload: {
                    ...res.data,
                    filters: filters,
                },
            });
        }
    };
};

export const clearReloadAction = () => {
    return async function (dispatch) {
        dispatch({
            type: "CLEAR_RELOAD_ACCOUNT",
            payload: {},
        });
    };
};

export const accountSaveAction = (dto) => async(dispatch) => {
    let res = null;
    res = await accountSaveService(dto);
    if (res != null && res.data != null) {
        dispatch({
            type: "RELOAD_ACCOUNT",
            payload: {
                ...res.data,
            },
        });
    }
};

export const accountUpdateAction = (dto,id) => async(dispatch) => {
    let res = null;
    res = await accountUpdateService(dto,id);
    if (res != null && res.data != null) {
        dispatch({
            type: "RELOAD_ACCOUNT",
            payload: {
                ...res.data,
            },
        });
    }
};

export const deleteAccountAction = (values) => {
    return async function (dispatch) {
        let res = await deleteAccountService(values);
        if (res != null && res.data != null) {
            if(res.data == true) {
                dispatch(searchAccount());
                dispatch({
                    type: "NOTIFICATION_SUCCESS",
                    payload: { data:"Üyelik Başarı ile Silinmiştir" },
                });
            }
            dispatch({
                type: "RELOAD_ACCOUNT",
                payload: {
                    ...res.data,
                },
            });
        }
    };
};

