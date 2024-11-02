import { useEffect, useRef, useState } from "react"
import Todo from "./components/Todo"
import {updateDoc, collection, addDoc,deleteField, getDocs, deleteDoc,doc} from "firebase/firestore";
import { db } from "./config/config";
import { auth } from "./config/config";
import { query, where } from "firebase/firestore";

function App() {
 const inputValue = useRef()
  const [todo, setTodo] = useState([])

 

  useEffect(() => {
    const getDataFromFirestore = async () => {
      const q = query(collection(db, "todos"), where("uid", "==", auth.currentUser.uid));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.data());
        todo.push({
          ...doc.data(),
          docid: doc.id
        })
        setTodo([...todo])
      });
    }
    
     getDataFromFirestore()
     
    
  }, [])

  const addTodo = async (event) => {
    event.preventDefault()
    console.log(inputValue.current.value)
    try {
      const docRef = await addDoc(collection(db, "todos"), {
           
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

    inputValue.current.value === ""

  }



  const deleteTodo = async ({docid},index) => {
//  console.log(item.docid)
         todo.splice(index,1)
        setTodo([...todo])
console.log(todo.splice(index,1))
await deleteDoc(doc(db, "todos", docid));
   

  }

//// update function ////////////


const updateTodo = async ({docid},index)=>{
  const newValue = prompt("enter value?")
  todo.splice(index,1,{title :newValue } )
  setTodo([...todo])
  console.log(todo)
await updateDoc(doc(db, 'todo', docid), {
 title:newValue     
});
}






  return (
    <div>
      <Todo reference={inputValue} func={addTodo} / >

      <div className='container  pt-4 mt-4 '>
        <div style={{ width: '70%', margin: 'auto' }} className="bg-light p-4 shadow-lg p-3 mb-5 bg-body rounded " >
          <ol>
            {todo.length > 0 ? todo.map((item,index) => {
              return <li className="bg-dark rounded d-flex bd-highlight p-2 m-1 text-light text-center " key={index}><b className="w-100">{item.title}</b>

                <button className="btn btn-outline-success mx-2 " onClick={()=>updateTodo(item,index)}  >
                  Edit
                </button>
                <button className="btn btn-outline-danger mx-2" onClick={()=>deleteTodo(item)}  >
                  Delete
                </button>
              </li>
            }) : <h1 className="text-center">No Data Found!</h1>
            }
          </ol>

        </div>
      </div>

    </div>
  )
}

export default App
