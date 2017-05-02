import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadData } from '../actions';

class Container extends Component {
  componentWillMount() {
    const { getData } = this.props;
    getData();
  }

  render() {
    const { data } = this.props;
    return (
      <div>
        {JSON.stringify(data)}
      </div>
    );
  }
}

Container.propTypes = {
  data: PropTypes.array.isRequired,
  getData: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  data: state.data,
});

const mapDispatchToProps = dispatch => ({
  getData: () => {
    dispatch(loadData());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);