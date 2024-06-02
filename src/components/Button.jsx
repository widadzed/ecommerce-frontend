import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, onClick, style, className }) => {
  return (
    <button onClick={onClick} style={style} className={className}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  style: PropTypes.object,
  className: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  style: {},
  className: '',
};

export default Button;
