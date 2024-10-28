import React, { useRef,useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/config';
import AlertSuccess from '../components/AlertSuccess';
import AlertError from '../components/AlertError';
import { useNavigate } from 'react-router-dom';
const Login = () => {

  const emailValue = useRef()
  const passwordValue = useRef()
 const navigate = useNavigate()

  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(null)


  const userLogin = (event) => {
    event.preventDefault()
    console.log(emailValue.current.value)
    console.log(passwordValue.current.value)

    signInWithEmailAndPassword(auth, emailValue.current.value, passwordValue.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        setSuccess(true)
        setTimeout(()=>{
          navigate('/')
        },1000)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage)
      });

  }

  return (
    <>
      {success ? <AlertSuccess alert='User Register Successfully!' /> : error ? <AlertError alert={error} /> : null}

      <div className='container text-center p-4 mt-5 bg-dark rounded shadow p-3 mb-5 bg-body rounded'>
        <h1>User Login</h1>
        <form onSubmit={userLogin} style={{ width: '60%', margin: 'auto' }}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder='Enter Your Email?'
              ref={emailValue}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder='Enter Your Password?'
              ref={passwordValue}
            />
          </div>
          <button type="submit" className="btn btn-dark">
            Login
          </button>
        </form>

      </div>
    </>

  )
}

export default Login