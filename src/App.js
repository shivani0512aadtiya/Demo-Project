import { Route, Routes } from "react-router-dom";
import Wish from "./Wish";
import Display from "./Display";
import Home from "./components/Home";
import Dashboard from "./Dashboard";
function App(){
   return<div>
   <Home/>
    <Routes>
    <Route path="/" element={<Home/>}>
      </Route> 
      <Route path="/dashboard" element={<Dashboard/>}>
      </Route>
      <Route path="/wish" element={<Wish/>}>
      </Route>
      <Route path="/Display" element={<Display/>}>
      </Route> 
    </Routes>
   </div>

}
export default App;