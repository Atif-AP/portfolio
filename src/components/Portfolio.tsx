import { NavLink } from "react-router-dom"
import styles from "./Portfolio.module.css"

const Portfolio = () => {
    return(
      <div>
        <div>
          <NavLink to="/components/portfolioComponents/calculator">Calculator App</NavLink>
        </div>
        <div>
          <NavLink to="/components/portfolioComponents/colorbox">ColorBox App</NavLink>
        </div>
        <div>
          <NavLink to="/components/portfolioComponents/filtering">Filtering App</NavLink>
        </div>
        <div>
          <NavLink to="/components/portfolioComponents/interval">Interval App</NavLink>
        </div>
        <div>
          <NavLink to="/components/portfolioComponents/shoppinglist">Shopping List App</NavLink>
        </div>
        <div>
          <NavLink to="/components/portfolioComponents/tictactoe">TicTacToe App</NavLink>
        </div>
        <div>
          Placeholder
        </div>
        <div>
          Placeholder
        </div>
      </div>
    )
};

export default Portfolio;