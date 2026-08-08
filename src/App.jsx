import React, { useState } from "react";

function App() {
  const [buttoncolor, setbuttoncolor] = useState("bg-white")
  const [disabled, setDisabled] = useState(false);
  const [status, setStatus] = useState("idle");
  const buttonColor = {
    idle: "bg-white",
    loading: "bg-blue-500",
    success: "bg-green-500",
    error: "bg-red-500",
  };

  async function handleClick() {
    setStatus("loading");
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1",
      );

      if (!response.ok) {
        throw new Error();
      }

      setStatus("success");
    } catch {
      setStatus("error");
    }
  }
  async function handleClicks() {
    setbuttoncolor("bg-red-500");
  }
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <button
        disabled={status == "loading"}
        className={`full-btn ${buttonColor[status]}`}
        onClick={handleClick}
      >
        {status}
      </button>

      <button
        disabled={status == "loading"}
        className={`full-btn ${buttoncolor}`}
        onClick={handleClicks}
      >
        Error
      </button>
    </div>
  );
}

export default App;
