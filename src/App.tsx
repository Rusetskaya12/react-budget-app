import React from 'react';
import { Budget, Expenses } from './components';
import { Form } from './components/Form/Form';




export const App = () => {
  return (
    <div>
      <Budget />
      <Expenses />
      <Form />
    </div>
  );
};
