import { Outlet, createBrowserRouter, RouterProvider, NavLink } from "react-router-dom";
import { useState } from 'react';
import styles from "./App.module.css";
import Calculator from "./components/portfolioComponents/Calculator";
import { ColorBox } from "./components/portfolioComponents/Colorbox";
import { Filtering } from "./components/portfolioComponents/Filtering";
import Interval from "./components/portfolioComponents/Interval";
import ShoppingList from "./components/portfolioComponents/Shoppinglist";
import TicTacToe from "./components/portfolioComponents/TicTacToe";

const Root = () => {
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <NavLink className={styles.link} to="/" >01 Home</NavLink>
            <NavLink className={styles.link} to="portfolio">02 Portfolio</NavLink>
            <NavLink className={styles.link} to="contact">03 Contact</NavLink>
        </div>
        <div>
            <Outlet/>
        </div>
    </div>
);
}

const Home = () => {
  return(
    <>
      <div className={styles.intro}>
        <p>Hi, my name is<br></br>
        <span className={styles.name}>Atif Khalil</span><br></br>
        <span className={styles.title}>Full Stack Developer</span><br></br>
        I'm a Full Stack Developer mostly into Front End using React</p> 
      </div>
      <div>

      </div>
    </>
  )
}

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

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100)
  };

  if (submitted) {
    return(
      <>
        <div>Thank you!</div>
        <div>I will be in touch!</div>
      </>
    )
  }

  return(
    <>
    <form action='' onSubmit={handleSubmit} method='post'>
      <label>Name</label>
      <input type='text' placeholder='Your Name' name='name' required></input>
      <label>E-mail</label>
      <input type='email' placeholder='Your Email' name='email' required></input>
      <label>Message</label>
      <textarea placeholder='Coding a Message...' name='message' required></textarea>
      <button type='submit'>Send Message</button>

    </form>
    </>
  )
}

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
          path: "",
          element: <Home/>
        },
        {
          path: "portfolio",
          element: <Portfolio/>,
        },
        {
          path: "contact",
          element: <Contact/>
        },
        {
          path: "/components/portfolioComponents/calculator",
          element: <Calculator/>
        },
        {
          path: "/components/portfolioComponents/colorbox",
          element: <ColorBox/>
        },
        {
          path: "/components/portfolioComponents/filtering",
          element: <Filtering/>
        },
        {
          path: "/components/portfolioComponents/interval",
          element: <Interval/>
        },
        {
          path: "/components/portfolioComponents/shoppinglist",
          element: <ShoppingList/>
        },
        {
          path: "/components/portfolioComponents/tictactoe",
          element: <TicTacToe/>
        },
        {
          path: "/components/portfolioComponents/calculator",
          element: <Calculator/>
        },
        {
          path: "/components/portfolioComponents/calculator",
          element: <Calculator/>
        },
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
