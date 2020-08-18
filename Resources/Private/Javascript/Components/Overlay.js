import React from 'react';
import propTypes from 'prop-types';

import { classList } from '../Helper/utilities'

const Overlay = ({ loading }) => {
  return (
    <div className={classList({
          'c-overlay': true,
          'c-overlay--loading': loading 
        })}
    ></div>
  );
};

Overlay.propTypes = {
  loading: propTypes.bool
};

export default Overlay;
