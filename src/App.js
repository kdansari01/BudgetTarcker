
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import { Home } from "./component/Home";
import { Movies } from "./component/Movies";
import { Navbar } from "./component/Navbar";
import { TvSerial } from "./component/TvSerial";
import "./app.css"


function App() {
  return (
 
    <>
    <BrowserRouter>
    
    <Navbar/>
    <Routes>

      <Route path="/" exact element = {<Home/>}/>
      <Route path="/Movies" exact element = {<Movies/>}/>
      <Route path="/TvSerial" exact element = {<TvSerial/>}/>

    </Routes>
    
    
    
    
    </BrowserRouter>
    
    
    </>
  );
}

export default App;
