import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Context from "./context/Context";

const App = () => {
  // const [countCartProducts, setCountCartProducts] = useState(0);

  return (
    <>
      <Context>
        <Header />
        <Outlet />
      </Context>
    </>
  );
};

export default App;
