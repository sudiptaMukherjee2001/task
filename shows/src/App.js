import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './component/Header/Header'
import "./App.scss"
import Landingpage from './component/LandingPage/Landingpage'
import Moviedetails from './component/MovieDetails/Moviedetails'
import Bookingform from './component/Bookingform/Bookingform'
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path='/' Component={Landingpage} />
        <Route path='/shows/:imdbId' Component={Moviedetails} />
        <Route path='/show/booking/:id' Component={Bookingform} />

      </Routes>
    </BrowserRouter>
  )
}

export default App 