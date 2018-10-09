import { connect } from 'react-redux';
import Chart from './Chart';
import { getStocks } from '../selector/stockSelector';

const mapStateToProps = (state) => ({
    data: getStocks(state),
});

export default connect(mapStateToProps)(Chart);