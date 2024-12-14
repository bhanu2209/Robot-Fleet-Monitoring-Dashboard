import React from "react";

function RobotList({ robots }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Status</th>
          <th>Battery</th>
          <th>CPU</th>
          <th>RAM</th>
          <th>Last Updated</th>
        </tr>
      </thead>
      <tbody>
        {robots.map((robot) => (
          <tr key={robot.id} style={{ color: robot.battery < 20 ? "red" : "black" }}>
            <td>{robot.id}</td>
            <td>{robot.status ? "Online" : "Offline"}</td>
            <td>{robot.battery}%</td>
            <td>{robot.cpu}%</td>
            <td>{robot.ram}%</td>
            <td>{robot.last_updated}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default RobotList;
