import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadData } from '../actions';
import { getDataLength } from '../selectors';

class Container extends Component {
  componentWillMount() {
    const { getData } = this.props;
    getData();
  }

  render() {
    const { length, data } = this.props;
    return (
      <div>
        <h1>{length}</h1>
        {JSON.stringify(data)}
      </div>
    );
  }
}

Container.propTypes = {
  data: PropTypes.array.isRequired,
  length: PropTypes.number.isRequired,
  getData: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  data: state.data,
  length: getDataLength(state),
});

const mapDispatchToProps = dispatch => ({
  getData: () => {
    dispatch(loadData(0));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);