import React, { useState } from 'react';
function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");
    const onNameChange = (e) => {
        setName(e.target.value);
    };
    const onEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const onTextChange = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { name, email, text };
        console.log(data)
        fetch("http://localhost:3500/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify(data),
        })
    }
    return (
      <div className="form">
        <div className="name">
         Name: <input type="text" name="name" onChange={onNameChange} />
        </div>
        <div className="email">
            Email: <input type="text" name="email" onChange={onEmailChange} />
        </div>
        <div className="text">
            Text: <input type="text" name="text"  onChange={onTextChange}/>
        </div>
        <div className="submit">
           <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    );
  }
  
  export default Form;
  