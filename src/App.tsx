import Functions from './utils';

function App() {
  const { answer, handlePress, expression } = Functions();

  return (
    <>
      <div className="container">
        <h1>FCC Calculator</h1>
        <div className="calculator">
          <div id="display" style={{ textAlign: 'right' }}>
            <div id="answer">{answer}</div>
            <div id="expression">{expression}</div>
          </div>
          <button
            id="clear"
            onClick={() => handlePress('clear')}
            className="jumbo"
          >
            C
          </button>
          <button id="percentage" onClick={() => handlePress('percentage')}>
            %
          </button>
          <button id="divide" onClick={() => handlePress('/')}>
            /
          </button>
          <button id="seven" onClick={() => handlePress('7')}>
            7
          </button>
          <button id="eight" onClick={() => handlePress('8')}>
            8
          </button>
          <button id="nine" onClick={() => handlePress('9')}>
            9
          </button>
          <button id="multiply" onClick={() => handlePress('*')}>
            *
          </button>
          <button id="four" onClick={() => handlePress('4')}>
            4
          </button>
          <button id="five" onClick={() => handlePress('5')}>
            5
          </button>
          <button id="six" onClick={() => handlePress('6')}>
            6
          </button>
          <button id="subtract" onClick={() => handlePress('-')}>
            -
          </button>
          <button id="one" onClick={() => handlePress('1')}>
            1
          </button>
          <button id="two" onClick={() => handlePress('2')}>
            2
          </button>
          <button id="three" onClick={() => handlePress('3')}>
            3
          </button>
          <button id="add" onClick={() => handlePress('+')}>
            +
          </button>
          <button id="zero" onClick={() => handlePress('0')}>
            0
          </button>
          <button id="decimal" onClick={() => handlePress('.')}>
            .
          </button>
          <button id="equals" onClick={() => handlePress('=')}>
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
