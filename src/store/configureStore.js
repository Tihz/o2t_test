import { applyMiddleware, createStore } from 'redux';
import stocksReducer from '../reducers/stocks';
import thunk from 'redux-thunk';

export default () => {
    return createStore(
        stocksReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(thunk)
    );
}