import React from 'react';
import { Alert } from './ApiErrorAlertStyles';

type ApiErrorAlertProps = {
    message: string;
  };

const ApiErrorAlert = ({ message }: ApiErrorAlertProps) => {
  return <Alert>🐾{message}</Alert>;
};

export default ApiErrorAlert;
