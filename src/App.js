import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import LegalNotices from './pages/LegalNotices/LegalNotices';

// Manage routing
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' default element={<Landing />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/legal-notices' element={<LegalNotices />} />
      </Routes>
    </Router>
  );
}

export default App;
