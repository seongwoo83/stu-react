import { useEffect, useState, useRef } from 'react'
import './App.css'
import Controller from './components/controller/Controller'
import Viewer from './components/viewer/Viewer'
import Even from './components/effects/Even'

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  const isMount = useRef(false);

  //1. mount
  useEffect(()=>{
    console.log('mount');
  },[])

  //2. update
  useEffect(()=>{
    if(!isMount.current){
      isMount.current = true;
      return;
    }
    console.log('update');
  })
  // 3. unmount
  
  
  /**
    의존성 배열(dependency array)
  */

  const onClickButton = (value:number)=>{
    setCount(count + value);
  }

  return (
    <div className='App'>
      <h1>Simple Counter</h1>
      <section>
        <input type="text" value={input} onChange={(e)=>{
          setInput(e.target.value);
        }}/>
      </section>
      <section>
        <Viewer count={count}/>
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  )
}

export default App
