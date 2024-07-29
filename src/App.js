import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import LogoutModal from './components/modals/LogoutModal';

function App() {
  const [data, setData] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [username, setUsername] = useState('');
  const [adminName, setAdminName] = useState('');
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:5000/api/data')
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleLogin = (username, isAdmin, adminName) => {
    setIsLoggedIn(true);
    setUsername(username);
    setIsAdmin(isAdmin);
    setAdminName(adminName);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setIsAdmin(false);
    setAdminName('');
    setShowLogoutModal(true);
  };

  return (
    <div className="App">
      <Header 
        isLoggedIn={isLoggedIn}
        isAdmin={isAdmin}
        onLogin={handleLogin}
        onLogout={handleLogout}
      />
      {showLogoutModal && <LogoutModal onClose={() => setShowLogoutModal(false)} />}
      <h1>
        {isLoggedIn ? (
          isAdmin ? `Welcome ${adminName} (admin) to the Big Web Dev Shop` : `Welcome ${username} to the Big Web Dev Shop`
        ) : (
          'Welcome to the Big Web Dev Shop'
        )}
      </h1>
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
