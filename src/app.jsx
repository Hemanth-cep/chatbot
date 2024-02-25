import React from "react"
import "./app.css"
import Header from "./components/header/header"
import Hero from "./components/hero/hero"

function App(){
    return(
        <div className="app">
             <Header />
             <Hero />
        </div>
    )
}

export default App