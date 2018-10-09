import { connect } from 'react-redux';

import EditableCell from './EditableCell';
import { changeValue } from '../actions/stockActions';

const mapDispatchToProps = (dispatch, props) => ({
    onChange: (value) => dispatch(changeValue(props.index, props.market, value)),
});

export default connect(false, mapDispatchToProps)(EditableCell);