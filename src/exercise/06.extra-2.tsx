// Basic Forms
// http://localhost:3000/isolated/exercise/06.extra-2.js

import * as React from 'react'
import '../global-isolated.css'

type PropsErrorMsg = {
    sMsg: string
}

type PropsInputElem = {
    sInputName: string,
    sErrorMsg: string,
    oRef: React.MutableRefObject<HTMLInputElement>
}

type onSubmitUsername = (username: string) => void;

function ShowErrorMsg( {sMsg}:PropsErrorMsg ){

    let jMarkup:React.ReactElement = <></>;

    if(sMsg){
        jMarkup = (
            <div>
                <h5 className='error' role='alert'>{sMsg}</h5>
            </div>
        )
    }

    return jMarkup;
}

function InputTextElem({sInputName, sErrorMsg,oRef}:PropsInputElem){

    const [error, setError] = React.useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        setError(e.target.value === e.target.value.toLowerCase() ? '' : sErrorMsg)
    }

    return (
        <div>
            <label htmlFor="username">Username:</label>
            <input onChange={handleChange} ref={oRef} type="text" id={sInputName} />
            <ShowErrorMsg sMsg={error}></ShowErrorMsg>
        </div>
    )

}

function UsernameForm({onSubmitUsername}:{onSubmitUsername: onSubmitUsername}) {
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

    const handleSubmit = (e:React.FormEvent)=> {
        e.preventDefault();
        onSubmitUsername(refUsername.current.value);
    }

    const refUsername = React.useRef<HTMLInputElement>(null!);

    return (
    <form className={__filename} onSubmit={handleSubmit}>

        <InputTextElem oRef={refUsername} sErrorMsg='Solo lettere minuscole!' sInputName='username'></InputTextElem>

        <button type="submit">Submit</button>
    </form>
    )
}

function App() {
  const onSubmitUsername:onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
