'use strict';

import { connect } from 'react-redux';
import Display from '../components/Display';

const mapStateToProps = (state) => {
  return {
    acorns: state.acornReducer.acorns,
  };
};

const DisplayAcorn = connect(
  mapStateToProps,
)(Display);

export default DisplayAcorn;