'use strict';

import { connect } from 'react-redux';
import { buyAcorn } from '../actions/acorn-actions';
import Button from '../components/Button';

const mapStateToProps = (state) => {
  return {
    label: 'Buy one',
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: () => {
      dispatch(buyAcorn(1));
    },
  };
};

const BuyAcorn = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button);

export default BuyAcorn;