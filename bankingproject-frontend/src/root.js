import {combineReducers} from "redux";
import account from "./modules/account/business/reducers/account";
import transfer from "./modules/transfer/business/reducers/transfer";

/**
 * Ana redux reducer dosyası
 */
const rootReducer = combineReducers({
  account,
  transfer
});

export default rootReducer;
