import React from "react"
import { Routes, Route } from 'react-router-dom'
import Header from "./components/navBar"
import Footer from "./components/footer"
import Cars from "./components/cars"
import Home from "./components/home"


function App() {


  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
