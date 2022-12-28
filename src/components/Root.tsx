import { Outlet, NavLink } from "react-router-dom"
import styles from "./Root.module.css"

const Root = () => {
    return (
      <div className={styles.container}>
          <div className={styles.header}>
              <NavLink className={styles.link} to="/" >01 Home</NavLink>
              <NavLink className={styles.link} to="portfolio">02 Portfolio</NavLink>
              <NavLink className={styles.link1} to="contact">03 Contact</NavLink>
          </div>
          <div>
              <Outlet/>
          </div>
      </div>
  );
}

export default Root;