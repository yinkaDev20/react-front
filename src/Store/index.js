import  thunk from 'redux-thunk';
import reducers from '../Redux';
import {createStore,applyMiddleware} from 'redux'




const store = createStore(reducers,applyMiddleware(thunk));


export default store;