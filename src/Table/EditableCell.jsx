import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { round } from '../utils';


const cellStyle = (error) => ({
    border: '1px solid',
    textAlign: 'center',
    width: '20px',
    borderColor: error ? 'red' : 'black',
});

const inputStyle = {
    width: '60px',
    borderWidth: 0,
    textAlign: 'center',
};

class EditableCell extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: false,
        }
    }

    changeValue = (event) => {
        const error = isNaN(value);
        this.setState({ error });
        if (!error) {
            const { value } = event.target;
            this.props.onChange(value);
        }
    };

    renderInput = (value) => (
        <input
            type="text"
            value={value}
            style={inputStyle}
            onChange={this.changeValue}
        />
    );

    render() {
        const value = round(this.props.value, 2);
        return (
            <td style={cellStyle(this.state.error)}>
                {this.renderInput(value)}
            </td>
        );
    }
}

EditableCell.propTypes = {
    value: PropTypes.number,
    onChange: PropTypes.func,
};

export default EditableCell;
