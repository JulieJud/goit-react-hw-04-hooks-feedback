import React from 'react';
import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, updateState }) {
  return options.map(option => (
    <button type="button" key={option} onClick={() => updateState(option)}>
      {' '}
      {option}{' '}
    </button>
  ));
}
FeedbackOptions.propTypes = {
  options: PropTypes.array,
  updateState: PropTypes.func,
};
