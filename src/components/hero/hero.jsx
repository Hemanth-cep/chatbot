import React, { useState } from "react"
import "./hero.css"
import Globe from "../ui/globe"
import Chatbot from "../chatbot/chatbot"
import TypeWrite from "../ui/typewrite"
import RobotGif from "./robot.gif"

function Hero(){

    var [openBot , setOpenBot] = useState(false)

    function handleOpenBot(){
        setOpenBot(true)
    }

    function handleCloseBot(){
        setOpenBot(false)
    }

    return(
        <React.Fragment>
            <Chatbot show={openBot} close = {handleCloseBot}>
                <div className="chatbot-section">
                    <button className="closebtn" onClick={handleCloseBot}>X</button>
                    <iframe src="https://tarun0912-gradiogenaichatbot.hf.space"></iframe>
                </div>
            </Chatbot>
            <div className="hero">
                <div className="hero-title">
                    <h1>Generative AI</h1>
                </div>
                <div className="introduction">
                    <img src={RobotGif} alt="" />
                    <TypeWrite />
                </div>
                <div className="globe-3d">
                    <Globe />
                </div>
                <div className="chatbot-entry">
                    <button className="openbtn" onClick={handleOpenBot}>Chat with Zen</button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Hero