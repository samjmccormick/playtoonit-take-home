import { useState } from "react";
import "./App.css";

function App() {
  const [avatarColor, setAvatarColor] = useState("#000000");

  function handleColorChange(event: React.ChangeEvent<HTMLInputElement>) {
    setAvatarColor(event.target.value);
  }

  return (
    <div className="container d-flex align-items-center h-100">
      <div className="d-flex flex-row justify-content-evenly align-content-center align-items-center fixed-top header">
        <h1 className="col">PLAYTOON</h1>
        <div className="col">Home</div>
      </div>
      <div
        id="avatar-container"
        className="d-flex justify-content-center  flex-column align-items-center w-75 mx-auto p-4"
        style={{ backgroundColor: avatarColor }}
      >
        <img
          src="https://robohash.org/asd"
          alt="Avatar"
          id="avatar"
          className="border border-secondary w-75 mb-3"
        />

        <input
          className="row mb-2"
          type="color"
          id="avatar-color"
          value={avatarColor}
          onChange={handleColorChange}
        ></input>
        <button
          type="button"
          className="btn row "
          onClick={() => setAvatarColor("#000000")}
        >
          Reset
        </button>
      </div>
      <div className="d-flex flex-row justify-content-evenly align-items-center fixed-bottom footer">
        <div className="col">2025 Playtoon Inc</div>
        <div className="col d-flex flex-row">
          <div>About</div>
          <div>Contact</div>
          <div>Privacy Policy</div>
          <div>Terms of Service</div>
        </div>
      </div>
    </div>
  );
}

export default App;
