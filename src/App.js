import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/data')
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <h1>Data from PostgreSQL</h1>
      <ul>
        <div>outside</div>
        {data.map(item => (
          <>
          <div>inside</div>
          <li key={item.suppid}>{item.suppname}</li>
          </>
        ))}
      </ul>
    </div>
  );
}

export default App;
