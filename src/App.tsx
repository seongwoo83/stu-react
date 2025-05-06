import { useState } from 'react'
import './App.css'
import Controller from './components/controller/Controller'
import Viewer from './components/viewer/Viewer'

function App() {
  const [count, setCount] = useState(0);

  const onClickButton = (value:number)=>{
    setCount(count + value);
  }

  return (
    <div className='App'>
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count}/>
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  )
}

export default App
