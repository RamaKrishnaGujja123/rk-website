import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills';
import Education from './components/Education';
import DownloadResume from './components/DownloadResume';
import Footer from './components/Footer';
import Contact from './components/Contact';
import WorkExperience from './components/WorkExperience';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />
        <Route path="/download-resume" element={<DownloadResume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/workexperience" element={<WorkExperience />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;