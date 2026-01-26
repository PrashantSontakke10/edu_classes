import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import QuickEnrollment from './components/QuickEnrollment';
import ValueOfferings from './components/ValueOfferings';
import Legacy from './components/Legacy';
import PopularCourses from './components/PopularCourses';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import AdmissionForm from './pages/AdmissionForm';
import Payment from './pages/payment';


function Home() {
  return (
    <>
      <Header />
      <Hero />
      <QuickEnrollment />
      <ValueOfferings />
      <Legacy />
      <PopularCourses />
      <Gallery />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admission-form" element={<AdmissionForm />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
