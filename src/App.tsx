import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import WelcomePage from './pages/WelcomePage';
import SingleCatPage from './pages/SingleCatPage';
import HomePage from './pages/HomePage';
import VotesPage from './pages/VotesPage';
import FavoritesPage from './pages/FavoritesPage';
import { GlobalStyles } from './GlobalStyles';

const App = () => {

  return (
      <Router>
        <GlobalStyles />
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/cat/:catId" element={<SingleCatPage />} />
          <Route path="/votes" element={<VotesPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </Router>
  );
};

export default App;
