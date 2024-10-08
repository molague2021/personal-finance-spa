import React from 'react';
export const App = () => {
  console.log(import.meta.env.VITE_APP_MY_KEY);
  return <div>Hello, personal finance app!</div>;
};
