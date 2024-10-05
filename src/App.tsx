import React from 'react';
export const App = () => {
  console.log(process.env.REACT_APP_FIREBASE_API_KEY);
  return <div>Hello, personal finance app!</div>;
};
