import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

function MapView({ robots }) {
  useEffect(() => {
    const map = L.map("map").setView([0, 0], 2);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

    robots.forEach((robot) => {
      const marker = L.marker([robot.location[0], robot.location[1]]);
      marker.addTo(map).bindPopup(`${robot.id}`);
    });
  }, [robots]);

  return <div id="map" style={{ height: "400px" }} />;
}

export default MapView;
