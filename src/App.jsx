import { useRef, useState } from "react"
import Todo from "./components/Todo"
import { collection, addDoc } from "firebase/firestore";
import { db } from "./config/config";
import { auth } from "./config/config";

function App() {
  const inputValue = useRef()
  const [todo, setTodo] = useState([])
  const addTodo = async (event) => {
    event.preventDefault()
    console.log(inputValue.current.value)
    try {
      const docRef = await addDoc(collection(db, "users"), {
        title: inputValue.current.value,
        uid: auth.currentUser.uid,

      });

      console.log("Document written with ID: ", docRef.id);
      todo.push({
        title: inputValue.current.value,
        uid: auth.currentUser.uid,
        docid: docRef.id
      })

      setTodo([...todo])
      console.log(todo)


    } catch (e) {
      console.error("Error adding document: ", e);
    }



  }












  return (
    <>
      <Todo reference={inputValue} func={addTodo} />

      <div className='container  pt-4 mt-4 '>
        <form style={{ width: '70%', margin: 'auto' }} className="bg-light p-4 shadow-lg p-3 mb-5 bg-body rounded " >
          <ol>
            {todo.length > 0 ? todo.map((item,index) => {
              return  <li className="bg-dark rounded d-flex bd-highlight p-2 m-1 text-light text-center " key={index}><b className="w-100">{item.title}</b>
          
          <button className="btn btn-outline-success mx-2 "  type="submit">
              Edit
            </button>
            <button className="btn btn-outline-danger mx-2"  type="submit">
              Delete
            </button>
         
          
         </li>
            }) : <h1 className="text-center">No Data Found!</h1>
            }
          </ol>

        </form>
      </div>

    </>
  )
}

export default App
