import './App.css';
import Button from './components/buttons'
import Input from './components/input';
import ClearButton from './components/clear'
import { useState } from 'react';
import { evaluate } from 'mathjs'

function App() {
  const [input, setInput] = useState('')

  const addInput = value => {
    setInput(input + value)
  }

  const calculateResult = () => {
    if (input) {
      setInput(evaluate(input))
    }
    else {
      alert('Please, enter a value.')
    }
  }

  return (
    <div className="App">
      <main className='container'>
        <div className='calculator'>
          <Input input={input} />
          <div className='row'>
            <Button handleClick={addInput}>1</Button>
            <Button handleClick={addInput}>2</Button>
            <Button handleClick={addInput}>3</Button>
            <Button handleClick={addInput}>+</Button>
          </div>
          <div className='row'>
            <Button handleClick={addInput}>4</Button>
            <Button handleClick={addInput}>5</Button>
            <Button handleClick={addInput}>6</Button>
            <Button handleClick={addInput}>-</Button>
          </div>
          <div className='row'>
            <Button handleClick={addInput}>7</Button>
            <Button handleClick={addInput}>8</Button>
            <Button handleClick={addInput}>9</Button>
            <Button handleClick={addInput}>*</Button>
          </div>
          <div className='row'>
            <Button handleClick={calculateResult}>=</Button>
            <Button handleClick={addInput}>0</Button>
            <Button handleClick={addInput}>.</Button>
            <Button handleClick={addInput}>/</Button>
          </div>
          <div className='row'>
            <ClearButton handleClick={() => setInput('')}>Clear</ClearButton>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;