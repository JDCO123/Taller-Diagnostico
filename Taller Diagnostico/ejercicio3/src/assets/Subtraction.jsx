import React, { useState } from 'react';

const Subtraction = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleSubtraction = () => {
    const sum = parseFloat(num1) - parseFloat(num2);
    setResult(sum);
  };

  return (
    <div id="subtraction">
      <h3>Resta</h3>
      <input type="number" placeholder="Número 1" value={num1} onChange={(e) => setNum1(e.target.value)} />
      <input type="number" placeholder="Número 2" value={num2} onChange={(e) => setNum2(e.target.value)} />
      <button onClick={handleSubtraction}>Calcular</button>
      <p>Resultado: {result}</p>
    </div>
  );
};

export default Subtraction;
