import React, { useState } from 'react';
// import formLogIn from './Lesson_01/formLogIn';


function App() {
  const [data, setData] = useState({
    username:'',
    password:'',
    email:'',
    address:'',
    age:'',
  })

  const {username, password, email, address, age} = data
const inputHandler = e => {
  setData({...data,[e.target.name]:[e.target.value]})
}
const submitHandler = e =>{
  e.preventDefault();
  console.log(data)
}

  return (
    <div>
      <center>
        <h1>Hello World !!!!</h1>
        <form onSubmit={submitHandler}>
              <input type='text' placeholder='USERNAME' value={username} name='username' onChange={inputHandler}/><br />
              <input type='password' placeholder='PASSWORD' value={password} name='password' onChange={inputHandler}/><br />
              <input type='email' placeholder='EMAIL' value={email} name='email' onChange={inputHandler}/><br />
              <input type='text' placeholder='ADDRESS' value={address} name='address' onChange={inputHandler}/><br />
              <input type='text' placeholder='AGE' value={age} name='age' onChange={inputHandler}/><br />
              <button type='submit' name='submit'>SUBMIT</button>      
        </form>
      </center>  
    </div>
  );
}
    

export default App;
