import { BrowserRouter,Routes, Route } from "react-router-dom";
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from '../component/HomePage';
import NaviBar from "../component/NavBar";

function App() {
  

  return (
    <>
    <NaviBar/>
    <BrowserRouter>
   
      <Routes>
        <Route path ='/'element={<HomePage/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
