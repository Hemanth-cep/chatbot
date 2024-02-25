import React from "react"
import ReactDOM from "react-dom"
import "./chatbot.css"
import { CSSTransition } from "react-transition-group";

function Chatbot(props){

    const content=(
        <CSSTransition
            in={props.show}
            timeout={1000}
            classNames="slide-in-left"
            mountOnEnter
            unmountOnExit
        >
        <aside className="chatbot-drawer">{props.children}</aside>
        </CSSTransition>
    );

    return( ReactDOM.createPortal(content , document.getElementById("chatbot-hook")))
}

export default Chatbot