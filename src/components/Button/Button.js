// import React from 'react';
// import PropTypes from 'prop-types';
// import s from './Button.module.css';

// const Button = ({ children, onClick, ...allyProps }) => (
//     <button type="button" className={s.btn} onClick={onClick} {...allyProps}>
//     {children}
//   </button>
// );

// Button.defaultProps = {
//   onClick: () => null,
//   children: null,
// };

// Button.propTypes = {
//   onClick: PropTypes.func,
//   children: PropTypes.node,
//   'aria-label': PropTypes.string.isRequired,
// };

// export default Button;

import React from 'react';
import s from './Button.module.css';
import PropTypes from 'prop-types';

export default function Button({ loadImages }) {
  return (
    <button type="button" className={s.btn} onClick={loadImages}>
      Load more...
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
};