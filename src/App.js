import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';

// Manage routing
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' default element={<Landing />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
