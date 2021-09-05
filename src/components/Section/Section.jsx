import React from 'react';
import PropTypes from 'prop-types';
import { Title } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <div>
      <Title>{title}</Title>
      {children}
    </div>
  );
};

Section.defaultProps = {
  children: null,
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.element),
};

export default Section;
