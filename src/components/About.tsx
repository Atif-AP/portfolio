import React from 'react'
import styles from "./About.module.css"
import { Link } from "react-router-dom"

const About = () => {

    return(
        <div className={styles.about}>
            <h1>Atif Khalil</h1>
            <h2>About Me:</h2>
            <h4>Hello, I am Atif Khalil I am in my final year of my Graduate Programming and I am a very enthusiastic programmer! I have been programming since I was 15. I created my first ever "Hello World" application in visual basic.
                In the meanwhile 7 years later it has been quite the journey. I have studied 3 years of Bachelors Electronics-ICT aswell so I have been actively engaged in programming studies for 5 years now. I find myself having the most fun
                in Web Development and want to continue that into my carreer as a Full Stack Developer.
            </h4>
            <h1>Skills</h1>
            <h4>React: Advanced</h4>
            <h4>HTML/CSS: Advanced</h4>
            <h4>Express: Very Good</h4>
            <h4>MongoDB: Very Good</h4>
            <h4>MySQL: Very Good</h4>
            <Link to="../portfolio">
                <button className={styles.btn}>Go To Portfolio</button>
            </Link>
        </div>
    )
}

export default About;