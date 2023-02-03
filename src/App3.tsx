import { useRef } from 'react'

function App3 () {

  const boxGoldRef = useRef<HTMLDivElement>();
  const boxCloneRef = useRef<HTMLDivElement>();
  const boxMoveRef = useRef<HTMLDivElement>();

  const changeBgColor = () => {
    boxGoldRef.current && (boxGoldRef.current.style.backgroundColor = 'goldenrod')
  }

  const cloneBox = () => {
    if (boxCloneRef.current) {
      const boxElement = boxCloneRef.current
      const clone = boxElement.cloneNode(true)
      boxElement.parentNode?.appendChild(clone)
    }
  }

  const moveBox = () => {
    if (boxMoveRef.current) {
      boxMoveRef.current.style.position = 'absolute';
      boxMoveRef.current.style.right = '0';
      boxMoveRef.current.style.top = '0';
      boxMoveRef.current.style.display = 'flex';
      boxMoveRef.current.style.justifyContent = 'center';
      boxMoveRef.current.style.alignItems = 'center';
      boxMoveRef.current.innerText = 'I\'m in corner'
      console.log(boxMoveRef)
    }
  }

  return (
    <div className='wrapper'>

      <div className='container__row'>
        <div className='box' ref={boxGoldRef}></div>
        <button onClick={changeBgColor}>Change color</button>
        <span className='comment'>// On click change box background color to gold</span>
      </div>

      <div className='container__row'>
        <div className='box' ref={boxCloneRef}></div>
      </div>

      <div className='container__row'>
        <button onClick={cloneBox}>Clone div</button>
        <span className='comment'>// On click clones element</span>
      </div>

      <div className='container__row'>

        <div className='wrapper'>
          <div className='container__row'>
            <div className='box' ref={boxMoveRef}></div>
          </div>

          <div className='container__row'>
            <button onClick={moveBox}>Send div to corner</button>
            <span className='comment'>// Adds "I'm in corner" inside box and position it in top right corner</span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App3;