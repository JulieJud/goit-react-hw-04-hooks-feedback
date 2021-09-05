import React from 'react';
import PropTypes from 'prop-types';
import { Buttons } from './FeedBackOptions.styled';

export default function FeedbackOptions({ options, updateState }) {
  return options.map(option => (
    <Buttons type="button" key={option} onClick={() => updateState(option)}>
      {option}
    </Buttons>
  ));
}
FeedbackOptions.propTypes = {
  options: PropTypes.array,
  updateState: PropTypes.func,
};
