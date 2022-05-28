import React from 'react'
import Featured from './components/Featured'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Earn from './components/Earn'
import Contact from './components/Contact'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/featured" element={<Featured />} />
      <Route path="/earn" element={<Earn />} />
      <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
