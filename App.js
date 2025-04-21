import React, { useState } from "react";
import "./App.css";

function App() {
  const [prompt, setPrompt] = useState("");
  const [renderedModel, setRenderedModel] = useState(null);

  const handleGenerate = () => {
    setRenderedModel(`3D model of: ${prompt}`);
  };

  return (
    <div className="app">
      <h1>AIDEON Workbench</h1>
      <input
        type="text"
        placeholder="e.g. titanium skeleton GMT"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button onClick={handleGenerate}>Generate Design</button>
      <div className="render">{renderedModel || "Your 3D design will appear here..."}</div>
    </div>
  );
}

export default App;
