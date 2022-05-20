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
import Blogs from './Components/Blogs/Blogs';
import RequireAuth from './Components/Shared/RequireAuth/RequireAuth';
import AddItem from './Components/Add/AddItem';
import MyItems from './Components/MyItems/MyItems';
import About from './Components/About/About';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/inventory' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/perfume/:id' element={
          <RequireAuth>
            <SpiceDetail></SpiceDetail>
          </RequireAuth>
        }></Route>
        <Route path='/stocks' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <hr />
      <Footer></Footer>
    </div>
  );
}

export default App;
