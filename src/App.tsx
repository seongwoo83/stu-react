import { ReactElement } from "react"
import "./App.css"

function Header():ReactElement{
  return(
    <header>
      <h1>Header</h1>
    </header>
  )
}

function App() {
  return (
    <>
      <Header />
      <h1>리액트 맛있겠다!</h1>
    </>
  )
}

export default App
