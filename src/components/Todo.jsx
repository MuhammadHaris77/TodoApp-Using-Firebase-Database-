import React from 'react'

const Todo = ({reference,func}) => {
  return (
    <div >
    <div className='container  pt-4 mt-4 '>
        <form style={{width:'70%',margin:'auto'}} onSubmit={func}>
        <div className="input-group mb-3">
   
        <input
          type="text"
          className="form-control"
          placeholder="Enter Your Todos?"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          ref={reference}
        />
        <button  className='bg-dark text-white rounded p-2'>
          ADD TODO
        </button>
        </div>
   
        </form>

        
    </div>
  </div>
  )
}

export default Todo