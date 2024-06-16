const initialState = {
    listTransfer: [],
    filters: {},
    totalCount: 0,
    reloadTransfer: false,
};

const transfer = (state = initialState, action) => {
    switch (action.type) {
        case "SEARCH_TRANSFER_HISTORY":
            let listTransfer = action.payload.resultList;
            let totalCount = action.payload.count;
            let filters = action.payload.filters;
            return {...state, listTransfer, totalCount, filters};
        case "RELOAD_TRANSFER": {
            return {
                ...state,
                reloadTransfer: true
            };
        }
        case "CLEAR_RELOAD_TRANSFER": {
            return {
                ...state,
                reloadTransfer: false
            };
        }
        default:
            return state;
    }
};
export default transfer;
