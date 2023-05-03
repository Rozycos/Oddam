import { HashRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import SignIn from "./components/SignIn/SignIn";
import Logout from "./components/Logout/Logout";
import GiveBack from "./components/GiveBack/GiveBack";
//import logo from './logo.svg';
//import './App.css';

const App = () => (
  <>
      <HashRouter>
      {/* <BrowserRouter> */}
          <Routes>
              <Route path={"/"} element={<Home/>}></Route>
              <Route path={"logowanie"} element={<Login/>}></Route>
              <Route path={"rejestracja"} element={<SignIn/>}></Route>
              <Route path={"wylogowano"} element={<Logout/>}></Route>
              <Route path={"oddaj-rzeczy"} element={<GiveBack/>}></Route>
              {/* <Route path={"/AnotherSite"} element={<AnotherSite />}></Route> */}
          </Routes>
      </HashRouter>
      {/* </BrowserRouter> */}
  </>
)

export default App;
