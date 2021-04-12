import {combineReducers} from 'redux'

import {dataReducer,currentReducer} from "./reducers";





// const {conmbineReducers}=redux;

const rootReducer = combineReducers({
    dataReducer,
    currentReducer}
)





export default rootReducer;