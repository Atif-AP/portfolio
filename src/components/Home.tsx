import styles from "./Home.module.css"
import headshot from "../assets/headshot.jpg"

const Home = () => {
    return(
      <div className={styles.container}>
        <div className={styles.intro}>
          <p>Hi, my name is<br></br>
          <span className={styles.name}>Atif Khalil</span><br></br>
          <span className={styles.title}>Full Stack Developer</span><br></br>
          I'm a Full Stack Developer mostly into Front End using React</p> 
        </div>
        <div className={styles.foto}>
          <img src={headshot} alt="My Face" height={500} />
        </div>
      </div>
    )
}

export default Home;