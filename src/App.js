import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import LegalNotices from './pages/LegalNotices/LegalNotices';
import Result from './pages/Reserve/Result';
import Reserve from './pages/Reserve/Reserve';

// Manage routing
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' default element={<Landing />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/legal-notices' element={<LegalNotices />} />
        <Route path='/reserve' element={<Reserve />} />
        <Route path='/result' element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;
