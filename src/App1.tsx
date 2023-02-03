import { useState, useEffect, useRef } from 'react'
import './App.css'

function App1() {
  
  const [count, setCount] = useState(0);
  const [countX2, setCountX2] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const [inputArray, setInputArray] = useState<string[]>([]);
  const [inputText, setInputText] = useState('');
  const [color, setColor] = useState('#000000');
  const [colorArray, setColorArray] = useState<string[]>([]);

  const inputFocus1 = useRef<HTMLInputElement>();
  const inputFocus2 = useRef<HTMLInputElement>();

  useEffect(() => {
    setCountX2(count * 2);
  }, [count]);

  useEffect(() => {
    setTimeout(() => setDisabled(false), 5000);
    inputFocus1.current && inputFocus1.current.focus();
  }, []);

  const handleInputSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setInputArray([...inputArray, inputText]);
    setInputText('');
    inputFocus2.current && inputFocus2.current.focus();
  }

  const createColorEle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setColorArray([...colorArray, color]);
  }


  return (
    <div className='wrapper'>
      
      <div className='container__row'>
        <input type='text' placeholder='Focus on page load' ref={inputFocus1} />
      </div>

      <div className='container__row'>
        <form>
          <input type='text' placeholder='Output on submit ↓' ref={inputFocus2} value={inputText} onChange={(e) => setInputText(e.target.value)} />
          <button onClick={handleInputSubmit}>Submit</button>
        </form>
      </div>

      <div className='container__row'>
        <span>{inputArray.map(input => (`${input} `))}</span>
      </div>

      <div className='container__row'>
        <button disabled={disabled}>Poga</button><span className='comment'>// On page load button is disabled for 5 seconds.</span>
      </div>

      <div className='container__row'>
        <button onClick={() => setCount(count + 1)}>Count: <b>{count}</b></button>
        <span className='comment'>// Adds 1 to the count when pressed. Multiplies count by 2 and displays in box below.</span>
      </div>

      <div className='container__row'>
        <div className='count-box'>Count: <b>{countX2}</b></div>
      </div>

      <div className='container__row'>
        <button onClick={createColorEle}>+</button>
        <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
        <span className='comment'>// When + is pressed it creats box in chosen color.</span>
      </div>

      <div className='container__row'>
        {colorArray.map(color => {return(
          <div className='color-box' key={Math.random() * 90103149198} style={{backgroundColor: color}}>{color}</div>
        )})}
      </div>
    </div>
  )
}

export default App1;
