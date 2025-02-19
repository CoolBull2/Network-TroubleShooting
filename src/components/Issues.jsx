import React, { useState } from "react";
import axios from "axios";

function Issues() {
  const [pingResult, setPingResult] = useState("");

  const handlePing = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:5000/ping");
      setPingResult(response.data.output);
    } catch (error) {
      setPingResult("Error fetching ping results");
    }
  };

  return (
    <div >
      <h2>Ping Test</h2>
      <button onClick={handlePing}>Run Ping</button>
      <pre style={{ marginTop: "20px", whiteSpace: "pre-wrap" }}>
        {pingResult}
      </pre>
    </div>
  );
}

export default Issues;
