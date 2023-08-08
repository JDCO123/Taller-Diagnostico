import React, { useState } from 'react';

const Division = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleDivision = () => {
    const sum = parseFloat(num1) / parseFloat(num2);
    setResult(sum);
  };

  return (
    <div id="division">
      <h3>División</h3>
      <input type="number" placeholder="Número 1" value={num1} onChange={(e) => setNum1(e.target.value)} />
      <input type="number" placeholder="Número 2" value={num2} onChange={(e) => setNum2(e.target.value)} />
      <button onClick={handleDivision}>Calcular</button>
      <p>Resultado: {result}</p>
    </div>
  );
};

export default Division;
