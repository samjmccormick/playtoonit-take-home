import { useState } from "react";
import "./App.css";

function App() {
  const [avatarColor, setAvatarColor] = useState("#000000");

  return (
    <div className="container d-flex align-items-center h-100">
      <div className="d-flex flex-row justify-content-evenly align-content-center align-items-center fixed-top header">
        <h1 className="col">PLAYTOON</h1>
        <div className="col">Home</div>
      </div>
      <div
        id="avatar-container"
        className="d-flex justify-content-center  flex-column align-items-center w-75 mx-auto p-3"
        style={{ backgroundColor: avatarColor }}
      >
        <img
          src="https://robohash.org/asd"
          alt="Avatar"
          id="avatar"
          className="border border-secondary w-75"
        />
        <form className="d-flex flex-column align-items-center">
          <input className="row" type="color" id="avatar-color"></input>
          <button type="button" className="btn btn-primary row">
            Reset
          </button>
        </form>
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
