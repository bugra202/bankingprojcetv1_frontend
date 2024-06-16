import {notification} from "antd";

const initialState = {
    listAccount:[],
    filters: {},
    totalCount: 0,
    reloadAccount: false,
};

const account = (state = initialState, action) => {
    switch (action.type) {
        case "SEARCH_HESAP_PLANI":
            let listAccount = action.payload.resultList;
            let totalCount = action.payload.count;
            let filters = action.payload.filters;
            return { ...state,listAccount,totalCount,filters};
        case "RELOAD_ACCOUNT": {
            return {
                ...state,
                reloadAccount: true
            };
        }
        case "CLEAR_RELOAD_ACCOUNT": {
            return {
                ...state,
                reloadAccount: false
            };
        }
        case "NOTIFICATION_SUCCESS": {
            notification["success"]({
                message: 'Başarılı',
                description: action.payload.data,
            });
            return { ...state };
        }
        case "NOTIFICATION_ERROR": {
            notification["error"]({
                message: 'Başarısız',
                description: action.payload.data,
            });
            return { ...state };
        }
        default:
            return state;
    }
};

export default account;
