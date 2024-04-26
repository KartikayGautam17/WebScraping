import React, { useState, useEffect } from "react";
import WebScraper from "./Webscraper_main";

function App() {
  const [incomingMsg, setIncomingMsg] = useState("No Backend Message");
  const [inpChange, setInpChange] = useState(null);
  const [val, setVal] = useState(null);
  const [code, setCode] = useState(0);
  const [codeText, setCodeText] = useState("No Code");
  async function API_TEST(val, setMsg, setCode, setCodeText) {
    const post = await fetch("http://localhost:8000/postdata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([val]),
    });
    if (post.ok) {
      post.json().then((data) => {
        setMsg(data.message);
        setCode(post.status);
        setCodeText(post.statusText);
      });
    } else if (post.status === 400) {
      const response = await post.json();
      setMsg(response.message);
      setCode(post.status);
      setCodeText(post.statusText);
    }
    console.log("POST request Completed");
  }

  return (
    <div className="App" style={{ color: "black" }}>
      <h1>POST Requests Test</h1>
      <h3>Type anything and it will update with POST request</h3>
      <h4>Will also show status codes,</h4>
      <input
        type="text"
        style={{ border: "2px solid black" }}
        placeholder="Type..."
        onChange={(event) => setInpChange(event.target.value)}
      ></input>
      <br></br>
      <br></br>
      <button
        onClick={() => {
          setVal(inpChange);

          //Experiment creating two buttons and then click this button
          //val = null
          //after this onclick() click the second button
          //just print the val ,do not call the setval
          // check if the state of val is updated after this onclick
          //after you charge your laptop obiously

          API_TEST(inpChange, setIncomingMsg, setCode, setCodeText);
        }}
        style={{ border: "2px solid black" }}
      >
        Click
      </button>
      <h1>Outoing :- {val}</h1>
      <h1>Incoming :- {incomingMsg}</h1>
      <h3>Status Code :- {code}</h3>
      <h4>Status Text :- {codeText}</h4>
    </div>
  );
}

export default App;
