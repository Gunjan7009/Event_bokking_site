import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
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
      {/* <Show /> */}
    </>
  )
}

export default App
