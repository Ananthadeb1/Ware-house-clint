import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home/Home';
import Header from './Components/Header/Header';
import Inventory from './Components/Home/Inventory/Inventory';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/Shared/NotFound/NotFound';
import Login from './Components/Shared/Login/Login';
import Register from './Components/Shared/Register/Register';
import SpiceDetail from './Components/SpiceDetail/SpiceDetail';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/spice/:id' element={<SpiceDetail></SpiceDetail>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;