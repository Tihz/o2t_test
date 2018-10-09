import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';

import Stocks from './StocksContainer';

class App extends Component {
    render() {
        const store = configureStore();
        return (
            <Provider store={store}>
                <Stocks/>
            </Provider>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
