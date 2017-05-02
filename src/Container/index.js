import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Autocomplete from 'react-autocomplete';
import { loadData, loadDrivers, inputChange } from '../actions';
import { getDriversLength, getItemList } from '../selectors';

class Container extends Component {
  componentWillMount() {
    const { getData } = this.props;
    getData();
  }

  render() {
    const { constructors, drivers, getDrivers, value, inputChange } = this.props;

    return (
      <div>
        <Autocomplete
          items={constructors}
          getItemValue={c => c.name}
          renderItem={(item, isHighlighted) => (
            <div
              className={isHighlighted ? 'highlighted' : ''}
            >{item.name}</div>
          )}
          onSelect={(value, item) => getDrivers(item.constructorId)}
          onChange={(event, value) => inputChange(value)}
          value={value}
        />
        <br/>
        <code>
          {JSON.stringify(drivers)}
        </code>
      </div>
    );
  }
}

Container.propTypes = {
  constructors: PropTypes.array.isRequired,
  drivers: PropTypes.array.isRequired,
  length: PropTypes.number.isRequired,
  getData: PropTypes.func.isRequired,
  getDrivers: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  constructors: getItemList(state),
  length: getDriversLength(state),
  drivers: state.drivers,
  value: state.value,
});

const mapDispatchToProps = dispatch => ({
  getData: () => {
    dispatch(loadData(0));
  },
  getDrivers: (id) => {
    dispatch(loadDrivers(id));
  },
  inputChange: (value) => {
    dispatch(inputChange(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);