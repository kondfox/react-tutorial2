import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Button = ({ label, action }) => {
  return (
    <div>
      <button onClick={action}>{label}</button>
    </div>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired
}

export default Button;