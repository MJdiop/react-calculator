import { useState } from 'react';

const Functions = () => {
  const [answer, setAnswer] = useState('');
  const [expression, setExpression] = useState('');
  const and = expression.trim();

  const isOperators = (symbol: string) => {
    return /[*/+-]/.test(symbol);
  };

  const handlePress = (symbol: string) => {
    if (symbol === 'clear') {
      setAnswer('');
      setExpression('0');
    } else if (symbol === 'negative') {
      if (answer === '') return;
      setAnswer(
        answer.toString().charAt(0) === '-' ? answer.slice(1) : '-' + answer
      );
    } else if (symbol === 'percent') {
      if (answer === '') return;
      setAnswer((parseFloat(answer) / 100).toString());
    } else if (isOperators(symbol)) {
      setExpression(and + ' ' + symbol + ' ');
    } else if (symbol === '=') {
      calculate();
    } else if (symbol === '0') {
      if (expression.charAt(0) !== '0') {
        setExpression(expression + symbol);
      }
    } else if (symbol === '.') {
      const lastNumber = expression.split(/[-+/*]/g).pop();
      if (!lastNumber) return;

      if (lastNumber?.includes('.')) return;
      setExpression(expression + symbol);
    } else {
      if (expression.charAt(0) === '0') {
        setExpression(expression.slice(1) + symbol);
      } else {
        setExpression(expression + symbol);
      }
    }
  };

  const calculate = () => {
    if (isOperators(and.charAt(and.length - 1))) return;
    const parts = and.split(' ');
    const newParts = [];

    for (let i = parts.length - 1; i >= 0; i--) {
      if (['*', '/', '+'].includes(parts[i]) && isOperators(parts[i - 1])) {
        newParts.unshift(parts[i]);
        let j = 0;
        let k = i - 1;
        while (isOperators(parts[k])) {
          k--;
          j++;
        }
        i -= j;
      } else {
        newParts.unshift(parts[i]);
      }
    }
    const newExpression = newParts.join(' ');
    if (isOperators(newExpression.charAt(0))) {
      setAnswer(eval(answer + newExpression) as string);
    } else {
      setAnswer(eval(newExpression) as string);
    }
    setExpression('');
  };
  return { handlePress, answer, expression };
};

export default Functions;
