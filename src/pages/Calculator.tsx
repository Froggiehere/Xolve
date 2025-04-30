import { useState } from 'react';

export default function Calculator() {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');

  const handleNumber = (num: string) => {
    setDisplay(prev => prev === '0' ? num : prev + num);
    setEquation(prev => prev + num);
  };

  const handleOperator = (op: string) => {
    setDisplay('0');
    setEquation(prev => prev + op);
  };

  const calculate = () => {
    try {
      const result = eval(equation);
      setDisplay(result.toString());
      setEquation(result.toString());
    } catch (error) {
      setDisplay('Hata');
      setEquation('');
    }
  };

  const clear = () => {
    setDisplay('0');
    setEquation('');
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold text-secondary-900 mb-8">Hesap Makinesi</h1>
      
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="bg-secondary-100 p-4 rounded-lg mb-4">
          <div className="text-right text-2xl font-mono">{display}</div>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {['7', '8', '9', '/'].map(btn => (
            <button
              key={btn}
              onClick={() => isNaN(Number(btn)) ? handleOperator(btn) : handleNumber(btn)}
              className="bg-primary-100 hover:bg-primary-200 p-4 rounded-lg"
            >
              {btn}
            </button>
          ))}
          {['4', '5', '6', '*'].map(btn => (
            <button
              key={btn}
              onClick={() => isNaN(Number(btn)) ? handleOperator(btn) : handleNumber(btn)}
              className="bg-primary-100 hover:bg-primary-200 p-4 rounded-lg"
            >
              {btn}
            </button>
          ))}
          {['1', '2', '3', '-'].map(btn => (
            <button
              key={btn}
              onClick={() => isNaN(Number(btn)) ? handleOperator(btn) : handleNumber(btn)}
              className="bg-primary-100 hover:bg-primary-200 p-4 rounded-lg"
            >
              {btn}
            </button>
          ))}
          {['0', '.', '=', '+'].map(btn => (
            <button
              key={btn}
              onClick={() => {
                if (btn === '=') calculate();
                else if (isNaN(Number(btn)) && btn !== '.') handleOperator(btn);
                else handleNumber(btn);
              }}
              className="bg-primary-100 hover:bg-primary-200 p-4 rounded-lg"
            >
              {btn}
            </button>
          ))}
          <button
            onClick={clear}
            className="col-span-4 bg-secondary-200 hover:bg-secondary-300 p-4 rounded-lg mt-2"
          >
            Temizle
          </button>
        </div>
      </div>
    </div>
  );
}