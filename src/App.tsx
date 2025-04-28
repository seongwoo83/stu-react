import { useState } from "react"
import "./App.css"

function App() {
  const [count, setCount] = useState<number>(0);
  const [light, setLight] = useState<string>("OFF");
  return (
    <>
    <div>
      <h1>{light}</h1>
      <button onClick={()=>{
        setLight(light === "OFF" ? "ON" : "OFF")
      }}>{light === "OFF" ? "켜기" : "끄기"}</button>
    </div>
    <h1>{count}</h1>
    <button onClick={()=>setCount(count+1)}>+</button>
    </>
  )
}

export default App
