import { useState, useEffect, useRef } from 'react'
import App1 from './App1'
import App2 from './App2';

function App() {

  // Task 2 Form 1

  const changeCount = (count: number,
                       setCount: React.Dispatch<React.SetStateAction<number>>
                      ) => {
    setCount(count + 1);
    console.log('Changing count!');
  }

  const changeInput = (e: React.ChangeEvent<HTMLInputElement>,
                       setInputText: React.Dispatch<React.SetStateAction<string>>
                      ) => {
    setInputText(e.target.value);
    console.log('Input change!');
  }

  const firstRender = () => {
    console.log('First render!')
  }

  const rendered = () => {
    console.log('Rendered!')
  }

  // Task 2 Form 2

  const changeCount2 = (count: number, 
                        setCount: React.Dispatch<React.SetStateAction<number>>,
                        fontSize: number,
                        setFontSize: React.Dispatch<React.SetStateAction<number>>
                       ) => {
    setCount(count + 1);
    setFontSize(fontSize + 1);
  }

  const changeInput2 = (e: React.ChangeEvent<HTMLInputElement>,
                        setInputText: React.Dispatch<React.SetStateAction<string>>
                       ) => {
      setInputText(e.target.value);
      document.title = e.target.value;
    }

  const firstRender2 = (setCount: React.Dispatch<React.SetStateAction<number>>) => {
    setCount(100)
  }

  const rendered2 = () => {
  }

 
  return (
    <div className='container'>
      
      <div className='container__row'>
        <h2>Task 1</h2>
      </div>
        <App1 />

      <div className='container__row'>
        <h2>Task 2</h2>
      </div>
        <App2 changeCount={(count, setCount) => changeCount(count, setCount)}
              changeInput={(event, setInputText) => changeInput(event, setInputText)}
              firstRender={() => firstRender()}
              rendered={() => rendered()}
        />
        <App2 changeCount={(count, setCount, fontSize, setFontSize) => changeCount2(count, setCount, fontSize, setFontSize)}
              changeInput={(event, setInputText) => changeInput2(event, setInputText)}
              firstRender={(setCount) => firstRender2(setCount)}
              rendered={() => rendered2()} // Not using
        />

      <div className='container__row'>
        <h2>Task 3</h2>
      </div>



    </div>
  )
}

export default App
