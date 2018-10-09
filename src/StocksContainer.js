import { connect } from 'react-redux';

import { load as loadStocks } from './actions/stockActions';

import Stocks from './Stocks';

const mapDispatchToProps = (dispatch) => ({
    load: () => dispatch(loadStocks)
});

export default connect(false, mapDispatchToProps)(Stocks);