import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Profile from './components/Profile';
function App() {
  return (
    <BrowserRouter><div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signin' element={<Signin/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
