import { Link } from "react-router-dom"
import styles from "./Portfolio.module.css"

const Portfolio = () => {
    return(
      <div className={styles.container}>
        <div className={styles.childContainer}>
            <h1>Calculator App</h1>
            <p className={styles.ptag}>A caclulator app that uses React Hooks and Typescript</p>
            <Link to="/components/portfolioComponents/calculator">
                <button className={styles.pButton}>
                    Go to App
                </button>
            </Link>
        </div>
        <div className={styles.childContainer}>
            <h1>Colorbox App</h1>
            <p className={styles.ptag}>A Color picker type app that uses React hooks and Typescript</p>
            <Link to="/components/portfolioComponents/colorbox">
                <button className={styles.pButton}>
                    Go to App
                </button>
            </Link>
        </div>
        <div className={styles.childContainer}>
            <h1>Filtering App</h1>
            <p className={styles.ptag}>A filtering app that filters data using React/Typescript</p>
            <Link to="/components/portfolioComponents/filtering">
                <button className={styles.pButton}>
                    Go to App
                </button>
            </Link>
        </div>
        <div className={styles.childContainer}>
            <h1>Interval App</h1>
            <p className={styles.ptag}>A interval app that updates it's data every so often using React/Typescript</p>
            <Link to="/components/portfolioComponents/interval">
                <button className={styles.pButton}>
                    Go to App
                </button>
            </Link>
        </div>
        <div className={styles.childContainer}>
            <h1>Shopping List App</h1>
            <p className={styles.ptag}>A shopping list app that saves addable data to local storage using React/Typescript</p>
            <Link to="/components/portfolioComponents/shoppinglist">
                <button className={styles.pButton}>
                    Go to App
                </button>
            </Link>
        </div>
        <div className={styles.childContainer}>
            <h1>Tic Tac Toe App</h1>
            <p className={styles.ptag}>A Tic Tac Toe game made using React/Typescript</p>
            <Link to="/components/portfolioComponents/tictactoe">
                <button className={styles.pButton}>
                    Go to App
                </button>
            </Link>
        </div>
        <div className={styles.childContainer}>
            <h1>Slots App</h1>
            <p className={styles.ptag}>A Slots game that uses React/Typescript </p>
            <Link to="/components/portfolioComponents/slots">
                <button className={styles.pButton}>
                    Go to App
                </button>
            </Link>
        </div>
        <div className={styles.childContainer}>
            <h1>Counter List App</h1>
            <p className={styles.ptag}>An App where u can add numbers and the app will create a sum using React/Typescript</p>
            <Link to="/components/portfolioComponents/counterlist">
                <button className={styles.pButton}>
                    Go to App
                </button>
            </Link>
        </div>
        <div className={styles.childContainer}>
            <h1>Activity App</h1>
            <p className={styles.ptag}>App gemaakt met behulp van een API in React/Typescript</p>
            <Link to="/components/apiComponents/activity">
                <button className={styles.pButton}>
                    Go to App
                </button>
            </Link>
        </div>
        <div className={styles.childContainer}>
            <h1>Relax Dog App</h1>
            <p className={styles.ptag}>App gemaakt met behulp van een API in React/Typescript</p>
            <Link to="/components/apiComponents/dog">
                <button className={styles.pButton}>
                    Go to App
                </button>
            </Link>
        </div>
      </div>
    )
};

export default Portfolio;