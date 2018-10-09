import { connect } from 'react-redux';

import Table from './Table';
import { getStocks } from '../selector/stockSelector';

const mapStateToProps = (state) => ({
    data: getStocks(state),
});

export default connect(mapStateToProps)(Table);