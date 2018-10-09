import React, { Component } from 'react';
import PropTypes from 'prop-types';

import EditableCell from './EditableCellContainer';

import markets from '../marketIndex';

const containerSyle = {
    border: '1px solid black',
};

const headerStyle = {
    ...containerSyle,
    width: '100px',
};

class Table extends Component {

    renderCell = (index, market, value) => (
        <EditableCell
            key={`${index}${market}`}
            index={index}
            market={market}
            value={value}
        />
    );

    renderLine = (data) => ({ name, label }) => {
        const cells = data.map(val => this.renderCell(val.index, name, val[name]));
        return (
            <tr key={name}>
                <th style={headerStyle}>{label}</th>
                {cells}
            </tr>
        );
    };

    render() {
        const lines = markets.map(this.renderLine(this.props.data));
        return (
            <table style={containerSyle}>
                <tbody>
                {lines}
                </tbody>
            </table>
        );
    }
}

Table.PropTypes = {
    data: PropTypes.object,
};

export default Table;
