import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Calculator from "./components/portfolioComponents/Calculator";
import ColorBox from "./components/portfolioComponents/Colorbox";
import Filtering from "./components/portfolioComponents/Filtering";
import Interval from "./components/portfolioComponents/Interval";
import ShoppingList from "./components/portfolioComponents/Shoppinglist";
import TicTacToe from "./components/portfolioComponents/TicTacToe";
import Root from "./components/Root";
import Portfolio from "./components/Portfolio";
import Home from "./components/Home";
import Contact from "./components/Contact";
import CryptoAPI from "./components/apiComponents/CryptoAPI";
import SlotMachine from "./components/portfolioComponents/Slots";
import CounterList from "./components/portfolioComponents/CounterList";

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
          path: "/components/portfolioComponents/counterlist",
          element: <CounterList/>
        },
        {
          path: "/components/portfolioComponents/slots",
          element: <SlotMachine slots={3}/>
        },
        {
          path: "/components/apiComponents/cryptoapi",
          element: <CryptoAPI/>
        }
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
