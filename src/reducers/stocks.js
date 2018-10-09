import { OrderedMap } from 'immutable';

import { STOCKS_LOADING_SUCCESS, STOCKS_VALUE_OVERRIDE } from '../actions/stockActions';

import markets from '../marketIndex';

const intialState = new OrderedMap();

const reduceByStocks = (market) => (state, { index, stocks }) =>
    state.setIn([index, market.name, 'value'], stocks[market.name]);

const reduceByMarket = (payload) => (state, market) =>
    payload.reduce(reduceByStocks(market), state);

export default (state = intialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case STOCKS_LOADING_SUCCESS:
            return markets
                .reduce(reduceByMarket(payload), state)
                .takeLast(10);

        case STOCKS_VALUE_OVERRIDE:
            const { index, market, value } = payload;
            return state.setIn([index, market, 'override'], value);
    }

    return state;
}