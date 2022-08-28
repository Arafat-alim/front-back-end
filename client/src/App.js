import React, { useState, useEffect } from "react";

export default function App() {
  const [backend, setBackend] = useState({});

  // fetching data from the backend
  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => setBackend(data));
  }, []);

  return (
    <div>
      <h1>Backend Server</h1>
      {typeof backend.users === "undefined" ? (
        <p>Loading</p>
      ) : (
        backend.users.map((item, index) => {
          return <h1 key={index}>{item}</h1>;
        })
      )}
    </div>
  );
}
