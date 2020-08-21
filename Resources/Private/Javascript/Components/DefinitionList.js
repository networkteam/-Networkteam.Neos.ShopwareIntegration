import React from 'react';
import propTypes from 'prop-types';

import { classList } from '../Helper/utilities';

const DefinitionList = ({ children, modifier }) => {
  return (
    <dl className={classList({
      'c-definition-list': true,
      ['c-definition-list--' + modifier]: modifier 
    })}>
      {children}
    </dl>
  );
};

export const DefinitionItem = ({ label, value, modifier }) => {
  return (
    <div className={classList({
      'c-definition-list__item': true,
      ['c-definition-list__item--' + modifier]: modifier 
    })}>
      <dt className='c-definition-list__item-label'>{label}</dt>
      <dd className='c-definition-list__item-value'>{value}</dd>
    </div>
  );
}

DefinitionList.propTypes = {
  children: propTypes.any,
  modifier: propTypes.string,
};

DefinitionItem.propTypes = {
  label: propTypes.string,
  value: propTypes.any,
  modifier: propTypes.string,
};

export default DefinitionList;
