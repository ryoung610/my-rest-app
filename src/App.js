import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // State to hold fetched items
  const [items, setItems] = useState([]);

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    fetch('https://https://y99b4dakck.execute-api.us-east-1.amazonaws.com/dev/itema')  // Replace <your-api-endpoint> with your actual API URL
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => console.error('Error fetching items:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* Rendering the items fetched from the API */}
        <div>
          <h1>Items List</h1>
          <ul>
            {items.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
