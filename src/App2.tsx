import { useState, useEffect, useRef } from 'react'

type ChangeProps = {
  changeCount: (count: number, 
                setCount: React.Dispatch<React.SetStateAction<number>>,
                fontSize: number,
                setFontSize: React.Dispatch<React.SetStateAction<number>>
               ) => void
  changeInput: (event: React.ChangeEvent<HTMLInputElement>,
                setInputText: React.Dispatch<React.SetStateAction<string>>
               ) => void
  firstRender: (setCount: React.Dispatch<React.SetStateAction<number>>
               ) => void
  rendered: () => void
}

function App2 ({changeCount, changeInput, firstRender, rendered}: ChangeProps) {
  const [count, setCount] = useState(0);
  const [inputText, setInputText] = useState('');
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    firstRender(setCount);
  }, []);

  useEffect(() => {
    rendered();
  });

  return (
    <div className='task-wrapper'>    
      <div className='container__row'>
        <button onClick={() => changeCount(count, setCount, fontSize, setFontSize)}>+</button>
        <span className='comment'>// Adds 1 to count</span>
      </div>

      <div className='container__row'>
        <span style={{fontSize: `${fontSize}px`}}>Count: <b>{count}</b></span>
      </div>

      <div className='container__row'>
        <input type='text'
               value={inputText}
               placeholder='Type here, output ↓'
               onChange={(event) => changeInput(event, setInputText)}
        />
        <span className='comment'>// On input change input text is shown below</span>
      </div>

      <div className='container__row'>
        <span>Output: {inputText}</span>
      </div>
    </div>
  )
}

export default App2;