import React from "react"
import "./app.css"
import Header from "./components/header/header"
import Hero from "./components/hero/hero"
import About from "./components/about/about"
import AuthPage from "./components/auth/authPage"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App(){
    return(
        <div className="app">   
             <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Hero />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/auth" element={<AuthPage />}/>
                </Routes>
             </Router>
        </div>
    )
}

export default App