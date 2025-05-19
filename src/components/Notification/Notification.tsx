import React from 'react';
import css from './Notification.module.css';

interface NotificationProps {
  message: string;
}
const Notification = ({ message }: NotificationProps) => {
  return <p className={css.message}>{message}</p>;
};

export default Notification;