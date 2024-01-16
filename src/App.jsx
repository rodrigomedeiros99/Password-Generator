import { useState } from "react";
import Input from "./componentes/input";
function App() {
  const [password, setPassword] = useState(" ");
  const [copyText, setCopyText] = useState("Copy!");
  const [customSize, setCustomdSize] = useState(12);
  const [showInput, setShowInput] = useState(false);
  const passwordSize = showInput ? customSize : 12;

  function generate() {
    const characters =
      "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?";

    let newPassword = "";
    for (let index = 0; index < passwordSize; index++) {
      const postion = Math.floor(Math.random() * characters.length);
      newPassword += characters[postion];
    }
    setPassword(newPassword);
    setCopyText("Copy!");
  }
  function copyToClipBoard() {
    window.navigator.clipboard.writeText(password);
    setCopyText("Copied!");
  }
  return (
    <div className="app">
      <h1>Password Generator</h1>
      <div>
        <label htmlFor="showInput">lenght Custom: </label>
        <input
          type="checkbox"
          id="showInput"
          value={showInput}
          onChange={() => setShowInput((currentState) => !currentState)}
        />
      </div>
      {showInput ? (
        <div>
          <label id="label-style" htmlFor="passwordSize">
            Lenght :
          </label>
          <Input passwordSize={customSize} setPasswordSize={setCustomdSize} />
        </div>
      ) : null}

      <button onClick={generate}>
        Generate password with {passwordSize} characters
      </button>
      <button onClick={copyToClipBoard}>{copyText}</button>
      <div className="password-style">{password}</div>
    </div>
  );
}

export default App;
