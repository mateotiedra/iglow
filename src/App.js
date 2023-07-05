import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing/Landing';

// Manage routing
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' default element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;
