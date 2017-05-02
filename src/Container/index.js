import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Autocomplete from 'react-autocomplete';
import { loadData, loadDrivers } from '../actions';
import { getDriversLength } from '../selectors';

class Container extends Component {
  componentWillMount() {
    const { getData } = this.props;
    getData();
  }

  render() {
    const { constructors, drivers, getDrivers } = this.props;

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
        />
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
};

const mapStateToProps = state => ({
  constructors: state.data,
  length: getDriversLength(state),
  drivers: state.drivers,
});

const mapDispatchToProps = dispatch => ({
  getData: () => {
    dispatch(loadData(0));
  },
  getDrivers: (id) => {
    dispatch(loadDrivers(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);