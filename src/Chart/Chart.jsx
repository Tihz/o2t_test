import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Legend, Line, LineChart, XAxis, YAxis } from 'recharts';

import markets from '../marketIndex';

class Chart extends Component {

    renderLine = ({ name, color, label }) => (
        <Line
            key={name}
            type="monotone"
            dataKey={name}
            stroke={color}
            isAnimationActive={false}
            name={label}
        />
    );

    render() {
        const { data } = this.props;

        const lines = markets.map(this.renderLine);

        return (
            <LineChart width={800} height={600} data={data}>
                <XAxis/>
                <YAxis/>
                {lines}
                <Legend/>
            </LineChart>
        );
    }
}

Chart.PropTypes = {
    data: PropTypes.object,
};

export default Chart;
