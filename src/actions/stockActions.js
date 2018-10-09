import { load as loadStocks } from '../repositories/stocksApi';

export const STOCKS_LOADING_REQUEST = 'STOCKS_LOADING_REQUEST';
export const STOCKS_LOADING_SUCCESS = 'STOCKS_LOADING_SUCCESS';
export const STOCKS_LOADING_ERROR = 'STOCKS_LOADING_ERROR';

export const STOCKS_VALUE_OVERRIDE = 'STOCKS_VALUE_OVERRIDE';

const action = (type, payload) => ({ type, payload });

const loadSuccessAction = (data) => action(STOCKS_LOADING_SUCCESS, data);

export const load = (dispatch) => {
    dispatch(action(STOCKS_LOADING_REQUEST));
    loadStocks()
        .then(
            data => dispatch(loadSuccessAction(data)),
            err => dispatch(action(STOCKS_LOADING_ERROR, err))
        );
};

export const changeValue = (index, market, value) => (dispatch) => {
    dispatch(action(STOCKS_VALUE_OVERRIDE, { index, market, value }));
};
