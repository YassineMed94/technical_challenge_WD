import { BrowserRouter,Routes, Route } from "react-router-dom";
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from '../component/HomePage';
import NaviBar from "../component/NavBar";
import Details from "../component/Details";

function App() {
  

  return (
    <>
    <NaviBar/>
    <BrowserRouter>
   
      <Routes>
        <Route path ='/'element={<HomePage/>} />
        <Route path ='/detail/:id' element={<Details/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
