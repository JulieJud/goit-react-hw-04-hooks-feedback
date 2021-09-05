import PropTypes from 'prop-types';
import { Title } from '../Section/Section.styled';

const Notification = ({ message }) => {
  return <Title>{message}</Title>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
