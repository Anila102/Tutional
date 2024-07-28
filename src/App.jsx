import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './pages/Layout/Header';
import { Spinner } from 'react-bootstrap';
import SpinnerContainer from './components/common/SpinnerContainer';

const Home = lazy(() => import('./pages/HomePage'));

function App() {
  return (
    <>
      <Suspense fallback={<SpinnerContainer />}>
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
