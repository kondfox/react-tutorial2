'use strict';

import { connect } from 'react-redux';
import { eatAcorn } from '../actions/acorn-actions';
import Button from '../components/Button';

const mapStateToProps = (state) => {
  return {
    label: 'Eat one',
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: () => {
      dispatch(eatAcorn(1));
    },
  };
};

const EatAcorn = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button);

export default EatAcorn;