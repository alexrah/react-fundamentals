// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
import '../global-isolated.css'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input


    const handleSubmit = (e)=> {
        e.preventDefault();
        console.log(e.target.elements[0].value);
        console.log(e.target.elements.username.value);
        console.dir(e.target.elements);

        /* DONT USE THE FOLLOWINGS it's not reliable and test fails */
        // console.log(e.target[0].value);
        // console.log(e.target.username.value);

        onSubmitUsername(e.target.elements.username.value);
    }

    return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" />
      </div>
      <button type="submit">Submit</button>
    </form>
    )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
