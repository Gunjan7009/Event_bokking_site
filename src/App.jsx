import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/Navbar"
import Carousell from "./Components/Carousell";
import TrendingCards from "./Components/TrendingCrads";
import Show from "./Components/show";
import Genre from "./Components/Genre";



function App() {


  return (
    <>
      <Navbar />
      <Carousell/>
      <TrendingCards />
      <Genre />
      {/* <Show /> */}
    </>
  )
}

export default App
