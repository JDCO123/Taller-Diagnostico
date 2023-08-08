import React from 'react';
import Header from './Header';
import Addition from './Addition';
import Subtraction from './Subtraction';
import Multiplication from './Multiplication';
import Division from './Division';

const Home = () => {
  return (
    <div>
      <Header />
      <div>
        <h2>Calculadora Básica</h2>
        <Addition />
        <Subtraction />
        <Multiplication />
        <Division />
      </div>
    </div>
  );
};

export default Home;
