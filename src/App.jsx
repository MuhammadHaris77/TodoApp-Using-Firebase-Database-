import { useRef } from "react"
import Todo from "./components/Todo"


function App() {
 const  inputValue = useRef()
       
const addTodo=(event)=>{
  event.preventDefault()
  console.log(inputValue.current.value) 
}












  return (
<>
<Todo reference={inputValue} func={addTodo}/>
</>
  )
}

export default App
