import React from "react"

export default function Info() {
    return (
        <div className="info-container">
            <img className="profile-pic" src="./images/profilepic.png"/>
            <h1 className="name">Laura Smith</h1>
            <h3 className="position">Frontend Developer</h3>
            <p className="email-info">laurasmith.website</p>
            <div className="buttons">
                <button className="email-btn">
                <i className="fa-solid fa-envelope email"></i>
                Email
                </button>
                <button className="linked-btn">
                <i className="fa-brands fa-linkedin linked-in"></i>
                LinkedIn</button>
            </div>
        </div>
    )
}