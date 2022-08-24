import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/src/collapse.js";
import "bootstrap/js/src/dropdown";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Components/Home';
import Users from './Components/Users';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/users" element={<Users/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
