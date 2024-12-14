import React, { useState, useEffect } from "react";
import RobotList from "./src/components/RobotList";
import MapView from "./src/components/MapView";

function App() {
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8000/ws");
    ws.onmessage = (event) => {
      setRobots(JSON.parse(event.data));
    };

    return () => ws.close();
  }, []);

  return (
    <div>
      <h1>Robot Fleet Monitoring</h1>
      <RobotList robots={robots} />
      <MapView robots={robots} />
    </div>
  );
}

export default App;
