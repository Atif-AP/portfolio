import { Outlet, NavLink } from "react-router-dom"
import styles from "./Root.module.css"
import DarkMode from "./DarkMode";

const Root = () => {
    return (
      <div className={styles.container}>
          <div className={styles.header}>
            <DarkMode/>
            <NavLink className={styles.link} to="/" >01 Home</NavLink>
            <NavLink className={styles.link} to="about">02 About</NavLink>
            <NavLink className={styles.link} to="portfolio">03 Portfolio</NavLink>
            <NavLink className={styles.link1} to="contact">04 Contact</NavLink>
          </div>
          <div>
            <Outlet/>
          </div>
      </div>
  );
}

export default Root;