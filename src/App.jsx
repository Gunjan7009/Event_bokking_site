import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./Components/Navbar"
import Carousell from "./Components/Carousell";
import TrendingCards from "./Components/TrendingCrads";
import Show from "./Components/show";
import Genre from "./Components/Genre";
import Music from "./Components/MusicEvents";
import ComedyEvents from "./Components/ComedyEvents";
import ConcertEvents from "./Components/ConcertEvents";
import WorkshopsEvents from "./Components/WorkshopsEvents";
import HealthWellnessEvents from "./Components/HealthWellnessEvents";
import AuthPage from "./Components/AuthPage";
import Footer from "./Components/Footer";



function App() {


  return (
    <>
      <Navbar />
      <Carousell/>
      <TrendingCards />
      <Genre />
      <ComedyEvents/>
      <Music />
      <ConcertEvents/>
      <WorkshopsEvents/>
      <HealthWellnessEvents/>
      <Footer />
      {/* <Show /> */}
      {/* <AuthPage /> */}
    </>
  )
}

export default App
