import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <div>
      <button onClick={props.action}>{props.label}</button>
    </div>
  );
}

Button.propTypes = {
  label: PropTypes.string,
}

export default Button;