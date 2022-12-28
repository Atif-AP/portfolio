import { Link } from "react-router-dom"
import styles from "./Portfolio.module.css"

const Portfolio = () => {
    return(
      <div className={styles.container}>
        <div className={styles.childContainer}>
            <h1>Calculator App</h1>
            <p>App gemaakt met React state</p>
            <Link to="/components/portfolioComponents/calculator">
                <button>
                    Go to App
                </button>
            </Link>
        </div>
        <div className={styles.childContainer}>
            <h1>Colorbox App</h1>
            <p>App gemaakt met React state</p>
            <Link to="/components/portfolioComponents/colorbox">
                <button>
                    Go to App
                </button>
            </Link>
        </div>
        <div className={styles.childContainer}>
            <h1>Filtering App</h1>
            <p>App gemaakt met React state</p>
            <Link to="/components/portfolioComponents/filtering">
                <button>
                    Go to App
                </button>
            </Link>
        </div>
        <div className={styles.childContainer}>
            <h1>Interval App</h1>
            <p>App gemaakt met React state</p>
            <Link to="/components/portfolioComponents/interval">
                <button>
                    Go to App
                </button>
            </Link>
        </div>
        <div className={styles.childContainer}>
            <h1>Shopping List App</h1>
            <p>App gemaakt met React state</p>
            <Link to="/components/portfolioComponents/shoppinglist">
                <button>
                    Go to App
                </button>
            </Link>
        </div>
        <div className={styles.childContainer}>
            <h1>Tic Tac Toe App</h1>
            <p>App gemaakt met React state</p>
            <Link to="/components/portfolioComponents/tictactoe">
                <button>
                    Go to App
                </button>
            </Link>
        </div>
        <div className={styles.childContainer}>
            <h1>PlaceHolder App</h1>
            <p>App gemaakt met React state</p>
            <Link to="/components/portfolioComponents/">
                <button>
                    Go to App
                </button>
            </Link>
        </div>
        <div className={styles.childContainer}>
            <h1>Placeholder App</h1>
            <p>App gemaakt met React state</p>
            <Link to="/components/portfolioComponents/">
                <button>
                    Go to App
                </button>
            </Link>
        </div>
      </div>
    )
};

export default Portfolio;