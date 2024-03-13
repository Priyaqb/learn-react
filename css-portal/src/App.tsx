// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';
import './App.css';

function App() {
  return (
    <main>
      <Router>
        <Routes>
          {/* @ts-ignore */}
          <Route path="/" element={<UserList />} />
          <Route path="/:id" element={<UserDetails />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
