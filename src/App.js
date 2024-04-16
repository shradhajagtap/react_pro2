import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './Components/Layout/NavBar';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Show from './Components/Pages/User/Show'
import Add from './Components/Pages/User/Add'
import Update from './Components/Pages/User/Update'
import Delete from './Components/Pages/User/Delete'


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/show' element={<Show/>}/>
        <Route path='/update/:userId' element={<Update/>}/>
        <Route path='/delete/:userId' element={<Delete/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
