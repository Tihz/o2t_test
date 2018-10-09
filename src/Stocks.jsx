import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Chart from './Chart/ChartContainer';
import Table from './Table/TableContainer';

class Stocks extends Component {

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
        this.props.load();
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    componentDidUpdate() {
        this.props.load();
    }

    render() {
        return (
            <div>
                <Chart/>
                <Table/>
            </div>
        )
    }
}

Stocks.propTypes = {
    load: PropTypes.func,
};

export default Stocks;


