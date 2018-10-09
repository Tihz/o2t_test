import { createSelector } from 'reselect'

import markets from '../marketIndex';

const data = state => state;

const mapStock = (stock, index) =>
    markets.reduce((previous, { name: market }) =>
        ({
            ...previous,
            [market]: stock.getIn([market, 'override']) || stock.getIn([market, 'value']),
        }), { index });

export const getStocks = createSelector(
    data, (data) => data
        .map(mapStock)
        .toOrderedSet()
        .toJS()
);